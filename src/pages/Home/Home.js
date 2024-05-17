import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Logo } from '../../componets'
import HeaderSearch from './component/HeaderSearch/HeaderSearch'
import HorizontalCategory from './component/HorizontalCategory/HorizontalCategory'
import About from './component/About/About'
import Banner from './component/Banner/Banner'
import CategoryBar from './component/categoryBar/CategoryBar'
import ListProduct from '../../componets/listProduct/ListProduct'
import Pagination from '../../componets/pagination/Pagination'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchRequest } from '../../saga/Products/Products.Action'
// import AxiosRequest from '../../API/Axios'

const HomeMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 20px;
`
const MainContentStyled = styled.div`
  .paginations {
    margin-top: 40px;
    margin-bottom: 44px;
    text-align: right;
  }
`

const Home = () => {
  const prod = useSelector((state) => {
    return state.productsReducer?.products
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      await dispatch(fetchRequest({}))
    })()
  }, [])

  return (
    <>
      <Logo />
      <HeaderSearch
      // onSearch={handleGetValueSearch}
      // search={search}
      // handleSearch={handleSearch}
      />
      <HorizontalCategory />
      <About />
      <Banner />
      <HomeMain>
        <CategoryBar />
        <MainContentStyled>
          <ListProduct products={prod} />

          {/* <Pagination
            total={productsState.length}
            pageSize={12}
            onChange={handleChangePage}
          /> */}
        </MainContentStyled>
      </HomeMain>
    </>
  )
}

export default Home
