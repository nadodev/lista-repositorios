
import *  as S from './styles'
import { Link, useRouteMatch} from 'react-router-dom'
import { FiChevronLeft,FiChevronRight } from 'react-icons/fi';
import {Api} from '../../services/Api'
import { useEffect, useState } from 'react';
interface RepositoryParams{
    repository: string
}

interface GitHubRepository{
    full_name: string,
    description: string,
    forks_count: number,
    open_issues_count: number,
    stargazers_count: number,
    owner:{
        login: string,
        avatar_url: string,
        html_url: string,
    }
}
interface GitHubIssue{
    id: number,
    title: string,
    html_url: string,
    user: {
        login: string,
        html_url: string,
    }
}
export function Repo(){
    const {params} = useRouteMatch<RepositoryParams>();
    const [repositorio , setRepositorio] = useState<GitHubRepository | null >(null)
    const [issues , setIssues] = useState<GitHubIssue[]>([])
    useEffect(() =>{
        Api.get(`/repos/${params.repository}`)
        .then(response => setRepositorio(response.data))

        Api.get(`/repos/${params.repository}/issues`)
        .then(response => setIssues(response.data))
    }, [params.repository])
    return(
     <>
     <S.Container>
          <img src="/logo.svg" alt="Logo da aplicacao" />
            <span>
            <Link to="/">  <FiChevronLeft />voltar</Link>
            </span>
            {repositorio && (
                <S.Repo>
                <header>
                   <a href={repositorio.owner.html_url} target="_blank">
                   <img src={repositorio.owner.avatar_url} alt=""/>
                   </a>
                     <div>
                     <p>{repositorio.owner.login}</p>
                         <strong>{repositorio.full_name}</strong>
                         <p>{repositorio.description}</p>
                     </div>
                </header>
                <ul>
                    <li>
                        <strong>{repositorio.stargazers_count}</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>{repositorio.forks_count}</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>{repositorio.open_issues_count}</strong>
                        <span>Issues Abertas</span>
                    </li>
                </ul>
             </S.Repo>
            ) }
            
           <S.Issues>
              {
                 issues.map(issue =>(
                    <a href={issue.html_url} key={issue.id} target="_blank">
                    <div>
                        <strong>{issue.title}</strong>
                        <p>{issue.user.login}</p>
                    </div>
                    <FiChevronRight/>
                </a>
                 ))
              }
           </S.Issues>
      </S.Container>
     
     </>
    );
}