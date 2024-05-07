import React, { useState } from "react";
import styled from "styled-components";
import { Logo } from "../../componets";
import HeaderSearch from "./component/HeaderSearch/HeaderSearch";
import HorizontalCategory from "./component/HorizontalCategory/HorizontalCategory";
import About from "./component/About/About";
import Banner from "./component/Banner/Banner";
import CategoryBar from "./component/categoryBar/CategoryBar";
import ListProduct from "../../componets/listProduct/ListProduct";
import Pagination from "../../componets/pagination/Pagination";
import products from "../../data";

const HomeMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 20px;
`;
const MainContentStyled = styled.div`
  .paginations {
    margin-top: 40px;
    margin-bottom: 44px;
    text-align: right;
  }
`;

const Home = () => {
  const [productsState, setProductsState] = useState(products);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleChangePage = (value) => {
    setPage(Number(value));
  };

  const handleGetValueSearch = (value) => {
    setSearch(value);
  };
  //tìm kiếm sản phẩm dựa trên từ khóa tìm kiếm hiện tại.
  const handleSearch = () => {
    const newProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setProductsState(newProducts);
    setPage(1);
  };

  const handleCategorySelect = (nav) => {
    if (nav === "ALL") {
      setProductsState(products);
    } else {
      const newProducts = products.filter((product) => product.type === nav);
      setProductsState(newProducts);
    }
    setPage(1);
  };

  return (
    <>
      <Logo />
      <HeaderSearch
        onSearch={handleGetValueSearch}
        search={search}
        handleSearch={handleSearch}
      />
      <HorizontalCategory onNav={handleCategorySelect} />
      <About />
      <Banner />
      <HomeMain>
        <CategoryBar />
        <MainContentStyled>
          
          <ListProduct page={page} limit={12} products={productsState} />

          <Pagination
            total={productsState.length}
            pageSize={12}
            onChange={handleChangePage}
          />
        </MainContentStyled>
      </HomeMain>
    </>
  );
};

export default Home;
