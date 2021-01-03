import styled, { keyframes, css } from 'styled-components';

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-40%);
    opacity:0.5;
  }
  to {
    transform: translateX(0);
    opacity:1;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(40%);
    opacity:0.5;
  }
  to {
    transform: translateX(0);
    opacity:1;
  }
`;

const LeftAnimation = css`
    animation-duration: 1s;
    animation-timing-function: ease-out; 
    animation-delay: 0s; 
    animation-iteration-count: 1; 
    animation-name:${slideInFromLeft};  
`;

const RightAnimation = css`
    animation-duration: 1s;
    animation-timing-function: ease-out; 
    animation-delay: 0s; 
    animation-iteration-count: 1; 
    animation-name:${slideInFromRight};  
`;


export const HeroContainer = styled.div`
  height:89vh;
  clip-path:polygon(0 0, 100% 0, 100% 75vh,0 100%);
  background-size:cover;
  background-position:top;
  position:relative; 
  text-align:center;
  background-image: ${({ image }) => `url(${image})`};
   
    
  #container{
    width:100%;
    max-width:1200px;
    margin:0 auto;
    position:absolute;
    top:40%;
    left:50%;
    transform:translate(-50%,-50%);

    h1{
      color:#fff;
      margin:0;
      margin-bottom:10px;
      display: block;
      font-size: 4rem;
      font-weight: 400;
      letter-spacing: 1.5rem;
      font-family:${({ theme }) => theme.fontFamily};
      text-transform: uppercase;
      ${LeftAnimation};
       
    }
    
    h2{
      margin:0;    
      margin-top:50px;
      color:#fff;
      line-height:2rem;
      display: block;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.5rem;
      font-family:${({ theme }) => theme.fontFamily};
      text-transform: uppercase;
      ${RightAnimation};

    }
  }

`;

export const RecentPostContainer = styled.div`
     width:100%;
     height:auto;
     text-align:center;
`;

export const PetsLayout = styled.div`
      display: grid;
      grid-template-columns:350px 350px 350px;
      grid-template-rows: auto auto auto;
      row-gap:30px;
      column-gap:50px;
      margin-top:20px; 
`;

export const WhyContainer = styled.div`

   h1,h2{
    color:${({ theme }) => theme.headerColor};
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    font-family:${({ theme }) => theme.Ubuntu};
   }
   h1{
     text-align:center;
     color:#000;
     margin:50px 0px;
   }
   p{
    color:#000;
    font-size: 1.2rem;
    font-weight: 400;
    font-family:${({ theme }) => theme.Ubuntu};
    letter-spacing: 0.05rem;

   }

`;