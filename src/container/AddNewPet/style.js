import styled from 'styled-components';



export const Hero = styled.div`

   width:100%;
   height:90vh;
   position:relative;

   .RFS-StepCircle-d12.active,.RFS-StepCircle-d4.active,
   .RFS-StepCircle-d28.active,.RFS-StepCircle-d20.active,
    .RFS-Connector-d3.active,.RFS-Connector-d7.active,
    .RFS-Connector-d11.active
   {
     background-color:${({ theme }) => theme.UIColor};
     border-color:${({ theme }) => theme.UIColor};
   } 

   .RFS-StepCircle-d4.completed,.RFS-StepCircle-d28.completed,
   .RFS-StepCircle-d20.completed,.RFS-StepCircle-d12.completed,
   .RFS-Connector-d3.completed,.RFS-Connector-d7.completed,
   .RFS-Connector-d11.completed
    {
    background-color:${({ theme }) => theme.UIHover};
    border-color:${({ theme }) => theme.UIHover};
   }

   span{
     color:${({ theme }) => theme.headerColor};
   }
 
`;

export const Body = styled.div`
   width:80%;
   margin:0 auto;
   height:auto;
   border: ${({ theme }) => `1px solid ${theme.UIColor}`};
   padding: 1.5rem;
   margin-bottom: 1.8rem;
   border-radius: 3px;

  


`;