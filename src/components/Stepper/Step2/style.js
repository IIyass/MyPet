import styled from 'styled-components';


export const Step2Container = styled.div`
  
   form{
       display:flex;
       flex-direction:column;
   }

   button{
       width:200px;
       align-self:flex-end;
   }

   .selectInput{
       display:flex;
       flex-direction:row;
       align-items:center;
       justify-content:space-between;
       margin-bottom:10px;

       input,textarea{
           width:400px;
           box-sizing: border-box;
       }
   }
`;