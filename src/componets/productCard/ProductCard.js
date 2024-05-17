import React, { useState } from 'react'
import Button from '../common/button/Button'
import Modal from '../../pages/Home/component/Modal/Modal'
import Input from '../common/form/input/Input'

import { FormProvider, useForm } from 'react-hook-form'
import AxiosRequest from '../../API/Axios'

import {
  ButtonGroupStyled,
  CardBottomStyled,
  CardImgStyled,
  CardImgWrapperStyled,
  CardStyled,
  CardTopStyled,
  CertifierSpanStyled,
  CertifierStyled,
  DescrioptionStyled,
  DivIdStyled,
  FavouriteStyled,
  FormUpdateStyled,
  LabelStyled,
  ProductNameStyled,
  QuantityCount,
  QuantityImgStyled,
  QuantityPriceStyled,
  QuantityStyled,
  UserAvtStyled,
  UserNameStyled,
  UserStyled,
} from './ProductCardStyle'

const ProductCard = ({ product, setDataState, dataState }) => {
  const [productState, setProductState] = useState({ ...product })
  const methodsModalEdit = useForm({})
  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    content: '',
    handleOk: () => {},
    handleCancel: () => {},
  })

  const handleShowModalEdit = () => {
    const Modalvalue = {
      id: productState.id,
      imageUrl: productState.imageUrl,
      title: productState.title,
      description: productState.description,
    }
    Object.keys(Modalvalue).forEach((key) => {
      methodsModalEdit.setValue(key, Modalvalue[key])
    })
    setModal({
      isOpen: true,
      title: 'CẬP NHẬT SẢN PHẨM',
      content: (
        <FormProvider {...methodsModalEdit}>
          <FormUpdateStyled>
            <DivIdStyled>
              <Input name={'id'} id='id' labelname={'ID:'} />
            </DivIdStyled>
            <Input name={'imageUrl'} labelname={'Image URL:'} />
            <Input name={'title'} labelname={'Title:'} />
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
          </FormUpdateStyled>
        </FormProvider>
      ),

      handleOk: async () => {
        const newProduct = methodsModalEdit.getValues()
        try {
          await AxiosRequest.put(`products/${newProduct.id}`, {
            ...newProduct,
          })
          setProductState(newProduct)
          console.log(newProduct)
          handleCancel()
        } catch (error) {
          console.error('Error updating product:', error)
        }
      },
      handleCancel,
    })
  }

  const handleShowModalDelete = () => {
    setModal({
      isOpen: true,
      title: 'XÓA SẢN PHẨM',
      content: 'Bạn có chắc chắn muốn xóa sản phẩm',
      handleOk: async () => {
        try {
          await AxiosRequest.delete(`products/${product.id}`)
          const res = dataState.filter((p) => p.id !== product.id)
          setDataState(res)
          handleCancel()
        } catch (error) {
          console.error('Error deleting product:', error)
        }
      },
      handleCancel,
    })
  }

  const handleCancel = () => {
    setModal({ ...modal, isOpen: false })
  }

  return (
    <CardStyled>
      {modal.isOpen && <Modal {...modal} />}
      <ButtonGroupStyled>
        <Button className='ant-btn-primary' onClick={handleShowModalEdit}>
          <i className='fa-regular fa-pen-to-square'></i>
        </Button>

        <Button
          className='ant-btn-primary'
          onClick={() => handleShowModalDelete()}
        >
          <i className='fa-solid fa-trash'></i>
        </Button>
      </ButtonGroupStyled>

      <CardTopStyled>
        <CardImgWrapperStyled>
          <CardImgStyled src={productState.imageUrl} />
        </CardImgWrapperStyled>
        <UserStyled>
          <UserAvtStyled src='card1.png' />
          <div>
            <UserNameStyled>{product.username}</UserNameStyled>
          </div>
        </UserStyled>
        <ProductNameStyled>{productState.title}</ProductNameStyled>
        <DescrioptionStyled>{productState.description}</DescrioptionStyled>
      </CardTopStyled>

      <CardBottomStyled>
        <QuantityStyled>
          <QuantityImgStyled src='quantity.png' />
          <QuantityCount>{product.likedCount}</QuantityCount>
        </QuantityStyled>
        <QuantityPriceStyled>¥ {product.price}</QuantityPriceStyled>
      </CardBottomStyled>
      {product.isCertificated && (
        <CertifierStyled>
          <CertifierSpanStyled>
            イケア家具組立認定サポーター
          </CertifierSpanStyled>
        </CertifierStyled>
      )}
      {product.saved && (
        <FavouriteStyled>
          <img src='iconfavourite.png' alt=''></img>
        </FavouriteStyled>
      )}
    </CardStyled>
  )
}

export default ProductCard
