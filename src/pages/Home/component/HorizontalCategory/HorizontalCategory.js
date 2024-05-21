import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRequest } from '../../../../saga/Products/Products.Action'

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
const categorys = [
  {
    label: 'ALL',
    value: '',
  },
  {
    label: 'BÀN PHÌM CƠ',
    value: 'keyboard',
  },
  {
    label: 'KEYCAP',
    value: 'keycap',
  },
  {
    label: 'SWITCH',
    value: 'switch',
  },
]
const HorizontalCategory = () => {
  const dispatch = useDispatch()
  const params = useSelector((state) => state.product.params)

  const handleFilterByCategory = (value) => {
    dispatch(fetchRequest({ ...params, category: value }))
  }
  return (
    <StyledHorizontalCategory>
      {categorys.map((item) => (
        <LinkStyled
          key={item.value}
          onClick={() => handleFilterByCategory(item.value)}
        >
          {item.label}
        </LinkStyled>
      ))}
    </StyledHorizontalCategory>
  )
}

export default HorizontalCategory
