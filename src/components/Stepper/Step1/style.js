import styled from 'styled-components';


export const Step1Container = styled.div`
  
   form{
       display:flex;
       flex-direction:column;
   }

   button{
       width:200px;
       align-self:flex-end;
   }

   .select{
       display:flex;
       flex-direction:row;
       align-items:center;
       justify-content:space-between;
       margin-bottom:10px;

       select{
           width:400px;
       }
   }
`;