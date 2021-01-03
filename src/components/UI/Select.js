import styled from 'styled-components';


export const Select = styled.select.attrs(props => ({
    type: props.type,

}))`
     
      width: 270px;
      height: 48px;
      line-height: 28px;
      font-size: 14px;
      box-sizing: border-box;
      padding: 0 1rem  ;
      border-radius: 4px  ;
      border:${({ theme }) => ` 1px solid ${theme.globalBackGround}`};
      font-weight: normal;
      cursor:pointer;
      :focus,:hover{
          border:${({ theme }) => ` 1px solid ${theme.UIHover}`};
      }
      -moz-appearance: none;
      -webkit-appearance: none;
       appearance: none;
 

`;