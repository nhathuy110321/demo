import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <img src="LOGO.png" alt="#" />
    </StyledLogo>
  );
};

export default Logo;
