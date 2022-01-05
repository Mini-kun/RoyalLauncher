import styled from 'styled-components';

const Logo = styled.svg`
  height: ${props => props.size || 40}px;
  -webkit-app-region: no-drag;
  * {
    transition: opacity 0.1s ease-in-out;
    ${props => (props.showPointerCursor ? 'cursor: pointer' : '')}
  }
 ${props =>
   !props.hover
     ? `&:hover {
    * {
      cursor: ${props.showPointerCursor ? 'pointer' : 'auto'};
      opacity: 0.9;
    } `
     : ``}
  }
`;
