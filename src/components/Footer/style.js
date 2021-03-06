import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    height:75px;
    align-items:center;
    background-color: ${({ theme }) => theme.headerColor};
    
    a{
        text-decoration:none;
        font-family:${({ theme }) => theme.fontFamily};
        font-size:20px;
        padding:10px 15px;
        font-size: 16px;
        box-sizing: border-box;
        font-weight: 400;
        cursor:pointer;
        border-radius:10px;
        color:#fff;
        :hover{
             color:${({ theme }) => theme.LinkColor};
        }
    }     
`;
export const Logo = styled.div``;
export const NavBar = styled.nav`

`;