import styled from 'styled-components';

export const Container = styled.div`
width:100%;
max-width:1200px;
margin:0 auto;
overflow:hidden;
`;

export const Wrapper = styled.div`
width:100%;
background-color:${({ theme }) => theme.globalBackGround};
 
`;