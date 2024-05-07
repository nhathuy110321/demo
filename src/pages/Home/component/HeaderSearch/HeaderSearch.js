import React from "react";
import { Button, Input } from "antd";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

const StyledSearch = styled.div`
  padding: 15px 10px;
  display: flex;
  gap: 15px;
  justify-content: center;

  .ant-input {
    width: 80%;
    height: 42px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.extraGray};
    color: #000;
    font-size: 18px;
    padding: 0px 10px;
  }
  .ant-btn {
    width: 42px;
    height: 42px;
    background-color: ${(props) => props.theme.primary};
    border-radius: 5px;
    color: #fff;
    outline: none;
    border: 0;
    padding: 0;
    font-size: 25px;

    &:hover {
      background-color: ${(props) => props.theme.primary} !important;
    }
  }
`;

const HeaderSearch = ({ onSearch, search, handleSearch }) => {
  return (
    <StyledSearch>
      <Input
        placeholder="キーワード"
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <Button type="primary" onClick={handleSearch}>
        <SearchOutlined />
      </Button>
    </StyledSearch>
  );
};

export default HeaderSearch;
