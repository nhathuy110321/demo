import React, { useState } from 'react'
import styled from 'styled-components'
import ProductCard from '../productCard/ProductCard'
import Button from '../common/button/Button'
import Input from '../common/form/input/Input'
import { FormProvider, useForm } from 'react-hook-form'
import Modal from '../../pages/Home/component/Modal/Modal'
import AxiosRequest from '../../API/Axios'

const ProductListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 15px;
`
const AddCardStyled = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
  .ant-btn {
    width: 55px;
    height: auto;
  }
`
const LabelStyled = styled.label`
  display: inline-block;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.textPrimary};
`
const FormUpdateStyled = styled.div`
  .ant-input {
    width: 100% !important;
  }

  #description {
    font-size: 1.2rem;
    border-color: ${({ theme }) => theme.primary} !important ;
  }
`
const ListProduct = ({ page, limit, products, setProductsState }) => {
  //

  const methodsModalAdd = useForm({
    defaultValues: {
      imageUrl: '',
      title: '',
      price: '',
      likedCount: '',
      description: '',
    },
  })
  const [modal, setModal] = useState({
    isOpen: false,

    handleOk: () => {},
    handleCancel: () => {},
  })

  const handleShowModalAdd = () => {
    setModal({
      isOpen: true,
      title: 'THÊM MỚI SẢN PHẨM',
      content: (
        <FormProvider {...methodsModalAdd}>
          <FormUpdateStyled>
            <Input name={'imageUrl'} labelname={'Image URL:'} />
            <Input name={'title'} labelname={'title:'} />
            <Input name={'price'} labelname={'Price:'} />
            <Input name={'likedCount'} labelname={'Liked Count:'} />
            <>
              <LabelStyled htmlFor='description'>Description:</LabelStyled>
              <Input
                id='description'
                name={'description'}
                type='textarea'
                autoSize={{
                  minRows: 3,
                  maxRows: 6,
                }}
              />
            </>
            <Input name={'username'} labelname={'username:'} />
          </FormUpdateStyled>
        </FormProvider>
      ),
      handleOk: async () => {
        const newData = methodsModalAdd.getValues()
        newData.id = products.length + 1
        try {
          await AxiosRequest.post(`products`, { ...newData })
          const newDataState = [newData, ...products]
          setProductsState(newDataState)

          methodsModalAdd.reset()
          handleCancel()
        } catch (error) {
          console.error('Error deleting product:', error)
        }
        handleCancel()
      },
      handleCancel,
    })
  }
  const handleCancel = () => {
    setModal({ ...modal, isOpen: false })
  }
  console.log(products)
  return (
    <div>
      {modal.isOpen && <Modal {...modal} />}

      <AddCardStyled>
        <Button className='ant-btn-default' onClick={handleShowModalAdd}>
          <i className='fa-solid fa-plus'></i>
        </Button>
      </AddCardStyled>
      <ProductListStyled>
        {products?.map((product, index) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              setDataState={setProductsState}
              dataState={products}
            />
          )
        })}
      </ProductListStyled>
    </div>
  )
}

export default ListProduct
