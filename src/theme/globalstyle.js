import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
*:before,
*:after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  font: inherit;
  font-family:"Noto Sans JP", sans-serif;
}

  
  ul,li {
    list-style: none;
  }
  
a {
  text-decoration: none;
  color: inherit;
  text-decoration: none;
  color: #000;
  position: relative;
  
  &:hover {
    color:${(props) => props.theme.primary};
    transition: all 0.2s linear;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  &:hover::after {
    transform: scaleX(1);
  }
}
.hover-link {
  transition: all 0.2s linear;
  
  &:hover, &.active {
    color: ${({ theme }) => theme.primary};;
  }
}


`;
