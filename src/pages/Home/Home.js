import styled from 'styled-components'

import { Logo } from '../../componets'
import ListProduct from '../../componets/listProduct/ListProduct'
import About from './component/About/About'
import Banner from './component/Banner/Banner'
import CategoryBar from './component/categoryBar/CategoryBar'
import HeaderSearch from './component/HeaderSearch/HeaderSearch'
import Pagination from '../../componets/pagination/Pagination'

import HorizontalCategory from './component/HorizontalCategory/HorizontalCategory'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchRequest } from '../../saga/Products/Products.Action'

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
  const dispatch = useDispatch()
  // const products = useSelector((state) => {
  //   return state.productsReducer?.products
  // }, shallowEqual)
  const product = useSelector((state) => state.product)
  const [page, setPage] = useState(1)

  useEffect(() => {
    console.log(page)
    dispatch(fetchRequest({ page }))
  }, [page])
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
          <ListProduct products={product.products} />

          <Pagination
            total={product.pagination.total}
            onChange={(value) => setPage(value)}
            current={product.pagination.currentPage}
            pageSize={product.params.limit}
          />
        </MainContentStyled>
      </HomeMain>
    </>
  )
}

export default Home
