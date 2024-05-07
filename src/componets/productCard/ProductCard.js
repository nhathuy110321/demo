import React, { useState } from "react";
import styled from "styled-components";
import Button from "../common/button/Button";
import Modal from "../../pages/Home/component/Modal/Modal";
import Input from "../common/form/input/Input";
import { FormProvider, useForm } from "react-hook-form";

// import products from "../../data";

const CardStyled = styled.div`
  padding-top: 15px;
  border-radius: 10px;
  border: 1px solid #d1d1d1;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
`;
const CardTopStyled = styled.div`
  padding: 0px 15px;
  position: relative;
  margin-top: 30px;
  height: 300px;
`;
const CardImgWrapperStyled = styled.div`
  &:hover {
    overflow: hidden;
  }
`;
const CardImgStyled = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 180px;
  box-sizing: border-box;
  &:hover {
    width: 100%;
    transition: transform 0.3s ease;
    transform: scale(1.2);
  }
`;
const UserAvtStyled = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
`;
const UserStyled = styled.div`
  padding: 5px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const UserNameStyled = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16.5px;
`;
const ProductNameStyled = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #151515;
  text-align: left;
  margin-bottom: 10px;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const DescrioptionStyled = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #575757;
  text-align: left;
  margin-bottom: 10px;
  /* turncate ( ẩn đi khi số dòng vượt quá quy định) */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const CardBottomStyled = styled.div`
  background-color: #f9f9f9;
  margin-top: 10px;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const QuantityStyled = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const QuantityImgStyled = styled.img`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #575757;
`;
const QuantityCount = styled.span`
  font-size: 18px;
`;
const QuantityPriceStyled = styled.span`
  font-family: "Noto Sans";
  font-size: 18px;
  font-weight: 700;
  line-height: 24.5px;
`;
const CertifierStyled = styled.div`
  position: absolute;
  top: 95px;
  background-color: #6a983c;
  padding: 10px 0;
  width: 70%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  &::after {
    content: "";
    position: absolute;
    left: -0.1px;
    bottom: -15px;
    border-top: 16px solid #46760a;
    border-left: 16px solid transparent;
    background-color: transparent;
  }
`;
const CertifierSpanStyled = styled.span`
  font-size: 14px;
`;
const FavouriteStyled = styled.div`
  position: absolute;
  top: 95px;
  right: 30px;
`;
const ButtonGroupStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  align-items: center;

  .ant-btn {
    width: 45px;
    height: 45px;
  }
`;
const FormUpdateStyled = styled.div`
  .ant-input {
    width: 100% !important;
  }
  #description {
    font-size: 1.2rem;
    border-color: ${({ theme }) => theme.primary} !important ;
  }
`;
const LabelStyled = styled.label`
  display: inline-block;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.textPrimary};
`;

const ProductCard = ({ product, setDataState, dataState }) => {
  const [productState, setProductState] = useState({ ...product });
  const methodsModalEdit = useForm({});
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    content: "",
    handleOk: () => {},
    handleCancel: () => {},
  });

  const handleShowModalEdit = () => {
    const Modalvalue = {
      imgProduct: productState.imgProduct,
      title: productState.title,
      description: productState.description,
    };
    Object.keys(Modalvalue).forEach((key) => {
      methodsModalEdit.setValue(key, Modalvalue[key]);
    });
    setModal({
      isOpen: true,
      title: "CẬP NHẬT SẢN PHẨM",
      content: (
        <FormProvider {...methodsModalEdit}>
          <FormUpdateStyled>
            <Input name={"imgProduct"} labelname={"Image URL:"} />
            <Input name={"title"} labelname={"Title:"} />
            <>
              <LabelStyled htmlFor="description">Description:</LabelStyled>
              <Input
                id="description"
                name={"description"}
                type="textarea"
                autoSize={{
                  minRows: 3,
                  maxRows: 6,
                }}
              />
            </>
          </FormUpdateStyled>
        </FormProvider>
      ),
      handleOk: () => {
        const newProduct = methodsModalEdit.getValues();
        setProductState(newProduct);
        console.log(newProduct);
        handleHideModal();
      },
      handleCancel: handleHideModal,
    });
  };

  const handleShowModalDelete = () => {
    setModal({
      isOpen: true,
      title: "XÓA SẢN PHẨM",
      content: "Bạn có chắc chắn muốn xóa sản phẩm",
      handleOk: () => {
        const newProduct = dataState.filter((p) => p.id !== product.id);
        setDataState(newProduct);
        handleHideModal();
      },
      handleCancel: handleHideModal,
    });
  };
  const handleHideModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  return (
    <CardStyled>
      {modal.isOpen && <Modal {...modal} />}
      <ButtonGroupStyled>
        <Button className="ant-btn-primary" onClick={handleShowModalEdit}>
          <i className="fa-regular fa-pen-to-square"></i>
        </Button>

        <Button
          className="ant-btn-primary"
          onClick={() => handleShowModalDelete()}
        >
          <i className="fa-solid fa-trash"></i>
        </Button>
      </ButtonGroupStyled>

      <CardTopStyled>
        <CardImgWrapperStyled>
          <CardImgStyled src={productState.imgProduct} />
        </CardImgWrapperStyled>
        <UserStyled>
          <UserAvtStyled src="card1.png" />
          <div>
            <UserNameStyled>UserName</UserNameStyled>
          </div>
        </UserStyled>
        <ProductNameStyled>{productState.title}</ProductNameStyled>
        <DescrioptionStyled>{productState.description}</DescrioptionStyled>
      </CardTopStyled>

      <CardBottomStyled>
        <QuantityStyled>
          <QuantityImgStyled src="quantity.png" />
          <QuantityCount>{product.likedCount}</QuantityCount>
        </QuantityStyled>
        <QuantityPriceStyled>¥ {productState.price}</QuantityPriceStyled>
      </CardBottomStyled>
      {productState.isCertificated && (
        <CertifierStyled>
          <CertifierSpanStyled>
            イケア家具組立認定サポーター
          </CertifierSpanStyled>
        </CertifierStyled>
      )}
      {productState.saved && (
        <FavouriteStyled>
          <img src="iconfavourite.png" alt=""></img>
        </FavouriteStyled>
      )}
    </CardStyled>
  );
};

export default ProductCard;
