import styled, {css} from 'styled-components';
import { darken, shade } from 'polished'

export const Container = styled.header`
    display: flex;
    flex-direction:column;
    width: 1000px;
    margin: 0 auto;
  h1{
      max-width: 450px;
      line-height:50px;
      margin-top:40px;
      font-weight: 600;
      font-size:30px;
      margin-bottom:40px;
  }
  img{
      margin-top:20px;
      width: 200px;
  }
  span{
   a{
      display: flex;
      align-items: center;
      transition:   0.3s;
      margin-top:30px;
      width: 100px;
      &:hover{
         color: #666;
      }
      svg{
          margin-right: 10px;
      }
   }
  }
`;
export const Repo = styled.section`
    margin-top:30px;
    header{
        display: flex;
        align-items: center;

        img{
            width: 120px;
            height:120px;
            border-radius: 50%;
            margin-right: 20px;
        }
        strong{
            font-size: 40px;
            color: #3d3d4d;
        }
    }

    ul{
        width:540px;
        padding: 10px;
        border-radius: 8px;
        display: flex;
        list-style: none;
        margin-top:40px;
        li{
            & + li{
                margin-left: 80px;
            }
            strong{
                font-size:30px;
                display: block;
                color: #3d3d4d;
            }
            span{
             
            }
        }
    }
`;
export const Issues = styled.div`

    margin-top: 30px;
    width: 500px;
    margin-bottom: 50px;
a{
    width:100%;
    background-color: #fff;
    border-radius:8px;
    display: flex;
    padding: 10px;
    transition:transform 0.3s;
    align-items: center;
    &:hover{
        transform: translateX(5px);
    }
    & + a{
        margin-top:10px;
    }
    div{
        width: 100%;
        margin: 0 16px;
        display: 1;

        strong{
            font-size:18px;
            color: #333;
        }
        p{
            font-size:15px;
            font-style: italic;
        }
    }
}
`;