
import *  as S from './styles'
import { FiChevronRight, FiTrash } from 'react-icons/fi';
import {Api} from '../../services/Api'
import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

interface GitHubRepository{
    full_name: string,
    description: string,
    owner:{
        login: string,
        avatar_url: string,
    }
}
export function Dashboard(){
    const formEl = useRef<HTMLFormElement | null>(null)
    const handleDelete = useCallback((repo) =>{
    const find = repos.filter(r => r.full_name !== repo)
        setRepos(find);
   },[]);

    const [repos, setRepos] = useState<GitHubRepository[]>(() =>{
        const hasRepo =  localStorage.getItem('@GitCollection:repositories')
        if(hasRepo){
         return JSON.parse(hasRepo)
         
        }
        return []
    })
    const [newRepo, setNewRepo] = useState('')
    const [error, setError] = useState('')

    function handleInputChange(e:React.ChangeEvent<HTMLInputElement>): void{
        setNewRepo(e.target.value)
    }
    async function handleAddRepositorie(e: React.FormEvent<HTMLFormElement>): Promise<void>{
            e.preventDefault()
            if(!newRepo){
                setError('Informe o Username/Repositorio')
                return;
            }
            try{
                const response = await Api.get<GitHubRepository>(`/repos/${newRepo}`)
                const repositorio = response.data;
                setRepos([...repos, repositorio])
                formEl.current?.reset()
                setNewRepo('')
            }catch{
                setError('Repositorio não encontrado no github')
                formEl.current?.reset()
            }
        }
        useEffect(() =>{
            localStorage.setItem('@GitCollection:repositories', JSON.stringify(repos))
        },[repos])
    return(
     <>
     <S.Container>
          <img src="/logo.svg" alt="Logo da aplicacao" />
            <h1>Catalogo de Repositorios</h1>
 
      <S.Form onSubmit={handleAddRepositorie} hasError={Boolean(error)} ref={formEl}>
          <input type="text" placeholder="username/repositorio" onChange={handleInputChange} />
          <button type="submit">Buscar</button>
      </S.Form>
            {
                error && (
                    <S.Error>
                         <p>{error}</p>
                    </S.Error>
                )
            }
      <S.Repo>

            {
              repos.map((repository, index) =>{
                return (
                    <div key={repository.full_name + index}>
                              
                    <S.RepoWraper>
                    <button onClick={() => handleDelete(repository.full_name)} className="btn"><FiTrash size={20} /></button>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                    <S.Box>
                  
                    <Link to={`/repositorio/${repository.full_name}`} key={repository.full_name} className="repoBox">
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </Link>
                       
                    </S.Box>
                    <FiChevronRight size={20}/>
              </S.RepoWraper>
              </div>
                )
              })
          }
         

      </S.Repo>
      </S.Container>
     </>
    );
}