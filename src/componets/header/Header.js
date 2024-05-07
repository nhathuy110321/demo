import React from "react";
import styled from "styled-components";
// import Container from "../container/Container";

const StyledHeader = styled.div`
  padding: 10px;
`;
const UlStyled = styled.ul`
  display: flex;
  justify-content: end;
  gap: 35px;
`;

const LinkStyled = styled.a`
  font-size: 12px;
  line-height: 17.38px;
  font-weight: 400;
`;

const navlist=['ログイン','新規登録','ご利用の流れ','マイページ']
const Header = () => {
  return (
    <StyledHeader>
      <UlStyled>
        {navlist.map((link, index) => (
          <li key={index}>
            <LinkStyled href="#">{link}</LinkStyled>
          </li>
        ))}
      </UlStyled>
    </StyledHeader>
  );
};

export default Header;
