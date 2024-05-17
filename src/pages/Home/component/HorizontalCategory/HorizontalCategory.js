import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import AxiosRequest from '../../../../API/Axios'

const StyledHorizontalCategory = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.extraGray};
`
const LinkStyled = styled.a`
  font-size: 15px;
  line-height: 21.72px;
  font-weight: 700;
  cursor: pointer;
`

// const navCategory = ['ALL', 'GIÀY THỂ THAO', 'SNEAKER', 'CAO GÓT']
const HorizontalCategory = ({ setDataPage }) => {
  const [categoryState, setCategory] = useState([])

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await AxiosRequest.get('category')
        setCategory(res)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchCategory()
  }, [])

  const handleAllProductsClick = () => {
    setDataPage((prev) => ({ ...prev, category: '' }))
  }

  const handleCategoryClick = (id) => {
    setDataPage((prev) => ({ ...prev, category: id }))
  }
  return (
    <StyledHorizontalCategory>
      <LinkStyled onClick={handleAllProductsClick}>ALL</LinkStyled>
      {categoryState.map((category) => (
        <LinkStyled
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </LinkStyled>
      ))}
    </StyledHorizontalCategory>
  )
}

export default HorizontalCategory
