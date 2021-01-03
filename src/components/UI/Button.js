import styled from 'styled-components';


export const Button = styled.button.attrs(props => ({
    type: props.type,
}))`

    height: 48px;
    border-radius: 4px;
    background-color:${({ theme }) => theme.UIColor};
    border: none;
    cursor:pointer;
    color:#fff;
    :hover{
        background-color:${({ theme }) => theme.UIHover};
    }

`;