import styled from 'styled-components';



export const CardContainer = styled.div`
  
    width:100%;
    border-radius:10px;
    cursor:pointer;
    padding:10px;
    box-shadow: 0px 0px 5px rgba(126, 126, 126, 0.5);
    background-color:#fff;
    text-align:left;
    img{
        border-radius:5px;
        width:100%;
        height:200px;
    } 

    h1{
        color:${({ theme }) => theme.headerColor};
        font-size: 2rem;
        font-weight: 400;
        text-transform: uppercase;
        font-family:${({ theme }) => theme.Ubuntu};
    }

    span,p{
        color:${({ theme }) => theme.headerColor};
        font-size: 1rem;
        font-weight: 500;
        text-transform: uppercase;
        font-family:${({ theme }) => theme.Ubuntu};
    }

    :hover{
        background-color:rgba(223, 223, 223, 0.2);
    }

 

`;