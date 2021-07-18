import styled, {css} from 'styled-components';
import { darken, shade } from 'polished'
interface FormProps {
    hasError: Boolean;
}
export const Container = styled.header`
    width: 1000px;
    margin: 0 auto;
  h1{
      max-width: 450px;
      line-height:50px;
      margin-top:40px;
      font-weight: 600;
      font-size:50px;
      margin-bottom:40px;
  }
  img{
      margin-top:20px;
  }
`;
export const Form = styled.form<FormProps>`
    display: flex;
    justify-content: start;
  h1{
      color: red;
  }
  input{
      width:500px;
      height:45px;
      border: 1px solid #ccc;
      border-right: 0;
      outline:none;
     ${(props) => props.hasError && css`
        border-color: #c53030;
      `};
      padding-left: 10px;
      border-radius:8px 0 0 8px;
      color: #555;
      &::placeholder{
          color: #ccc;
      }
  }
  button{
      background: #04d361;
      color: white;
      padding: 4px;
      height: 45px;
      border-radius:0 8px 8px 0;
      width: 100px;
      transition: 1s;
      &:hover{
       
         background:${darken(0.5, '#04d361')}
      }
  }
`;

export const RepoWraper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    background: #fff;
    margin-top: 20px;
    border-radius: 5px;
    transition:   0.3s;
    &:hover{
        transform: translateX(5px);
      
    }
`;
export const Repo = styled.div`
   display: flex;
  flex-direction: column;
    margin-top: 20px;
    button{
  margin-right: 10px;
  background-color: transparent;
  svg{
      color: red;
  }
}

    width: 600px;
img{
    width:50px;
    height:50px;
    border-radius: 50%;
    margin: 0;

}
svg{
        margin-left: auto;
        color: #a8a8b3;

    &:hover{
        opacity:0.5
    }
    }
  
`;
export const Box = styled.div`
    flex: 1;
    margin: 0 16px;
    strong{
        font-size:20px;
    }
    p{
        font-size:15px;
        color: #a8a8b3;
    }

   
`;
export const Error = styled.div`

    margin-top: 10px;
    margin-left: 5px;
    p{
        color: red;
        opacity:0.7;
        font-size:13px;
        font-style: italic;

    }
`;