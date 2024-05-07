import React from "react";
import styled from "styled-components";

const StyledHorizontalCategory = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.extraGray};
`;
const LinkStyled = styled.a`
  font-size: 15px;
  line-height: 21.72px;
  font-weight: 700;
`;

const navCategory = ["ALL", "GIÀY THỂ THAO", "SNEAKER", "CAO GÓT"];
const HorizontalCategory = ({ onNav }) => {
  return (
    <StyledHorizontalCategory>
      {navCategory.map((link, index) => (
        <li key={index}>
          <LinkStyled onClick={() => onNav(link)}>{link}</LinkStyled>
        </li>
      ))}
    </StyledHorizontalCategory>
  );
};

export default HorizontalCategory;
