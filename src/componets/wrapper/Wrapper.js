import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  margin: 0 auto;
  max-width: 1260px;
  background-color: white;
`;
const Wrapper = (props) => {
  return <WrapperStyled>{props.children}</WrapperStyled>;
};
export default Wrapper;
