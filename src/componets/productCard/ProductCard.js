import React, { useState } from 'react'
import Button from '../common/button/Button'
import Modal from '../../pages/Home/component/Modal/Modal'
import Input from '../common/form/input/Input'

import { FormProvider, useForm } from 'react-hook-form'

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

import { useDispatch } from 'react-redux'

import {
  deleteRequest,
  patchRequest,
} from '../../saga/Products/Products.Action'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const methodsModalEdit = useForm({})

  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    content: '',
    handleOk: () => {},
    handleCancel: () => {},
  })

  //EDIT
  const handleShowModalEdit = () => {
    const Modalvalue = {
      id: product.id,
      imageUrl: product.imageUrl,
      title: product.title,
      description: product.description,
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
          dispatch(patchRequest(newProduct))

          handleCancel()
        } catch (error) {
          console.error('Error updating product:', error)
        }
      },
      handleCancel,
    })
  }

  //DELETE

  const handleShowModalDelete = () => {
    setModal({
      isOpen: true,
      title: 'XÓA SẢN PHẨM',
      content: 'Bạn có chắc chắn muốn xóa sản phẩm',
      handleOk: async () => {
        try {
          dispatch(deleteRequest(product._id))
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
          <CardImgStyled src={product.imageUrl} />
        </CardImgWrapperStyled>
        <UserStyled>
          <UserAvtStyled src='card1.png' />
          <div>
            <UserNameStyled>
              {product.username} {product.id}
            </UserNameStyled>
          </div>
        </UserStyled>
        <ProductNameStyled>{product.title}</ProductNameStyled>
        <DescrioptionStyled>{product.description}</DescrioptionStyled>
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
