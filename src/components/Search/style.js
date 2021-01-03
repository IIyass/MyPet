import styled, { keyframes, css } from 'styled-components';

const BottomToTop = keyframes`
  from {
    transform: translateY(100%);
    opacity:0.5;
  }
  to {
    transform: translateY(0);
    opacity:1;
  }
`;

const BottomToTopAnimation = css`
    animation-duration: 1s;
    animation-timing-function: ease-out; 
    animation-delay: 0s; 
    animation-iteration-count: 1; 
    animation-name:${BottomToTop};  
`;


export const SearchContainer = styled.div`
    display:flex;
    flex-direction:column;

 #search{
   display:flex;
   flex-direction:row;
   justify-content:space-evenly;
   margin-top:30px;
   ${BottomToTopAnimation};

   button{
    width:130px;
   }
 }

 ul{
  display:flex;
  flex-direction:row;
  justify-content:center;
  list-style:none;
     li{
         width:200px;
         padding:10px 0px;
         border-radius:10px;
         margin:40px 20px;
         display: block;
         font-size: 2rem;
         color:#fff;
         font-weight: 400;
         cursor:pointer;
         color:${({ theme }) => theme.UIColor};
         border: ${({ theme }) => `2px solid  ${theme.UIColor}`};
         :nth-child(${({ selectedTag }) => selectedTag}){
           background-color:${({ theme }) => theme.UIColor};
           color:#fff;
         }

     }

 }

`;