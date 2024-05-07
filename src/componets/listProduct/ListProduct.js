import React, { useState } from "react";
import styled from "styled-components";
import ProductCard from "../productCard/ProductCard";
import Button from "../common/button/Button";
import Input from "../common/form/input/Input";
import { FormProvider, useForm } from "react-hook-form";
import Modal from "../../pages/Home/component/Modal/Modal";

const ProductListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 15px;
`;
const AddCardStyled = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
  .ant-btn {
    width: 55px;
    height: auto;
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
const FormUpdateStyled = styled.div`
  .ant-input {
    width: 100% !important;
  }
  #description {
    font-size: 1.2rem;
    border-color: ${({ theme }) => theme.primary} !important ;
  }
`;
const ListProduct = ({ page, limit, products }) => {
  const [dataState, setDataState] = useState(products);
  const methodsModalAdd = useForm({
    defaultValues: {
      imgProduct: "",
      title: "",
      price: "",
      likedCount: "",
      description: "",
    },
  });
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    content: "",
    handleOk: () => {},
    handleCancel: () => {},
  });

  const handleShowModalAdd = () => {
    setModal({
      isOpen: true,
      title: "THÊM MỚI SẢN PHẨM",
      content: (
        <FormProvider {...methodsModalAdd}>
          <FormUpdateStyled>
            <Input name={"imgProduct"} labelname={"Image URL:"} />
            <Input name={"title"} labelname={"title:"} />
            <Input name={"price"} labelname={"Price:"} />
            <Input name={"likedCount"} labelname={"Liked Count:"} />

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
        const newData = methodsModalAdd.getValues();
        newData.id = dataState.length + 1;
        const newDataState = [newData, ...dataState];
        setDataState(newDataState);
        methodsModalAdd.reset();
        //reset form

        //Thoat form
        handleHideModal();
      },
      handleCancel: handleHideModal,
    });
  };
  const handleHideModal = () => {
    setModal({ ...modal, isOpen: false });
  };
  return (
    <div>
      {modal.isOpen && <Modal {...modal} />}

      <AddCardStyled>
        <Button className="ant-btn-default" onClick={handleShowModalAdd}>
          <i className="fa-solid fa-plus"></i>
        </Button>
      </AddCardStyled>
      <ProductListStyled>
        {dataState.map((product, index) => {
          const skip = (page - 1) * limit;
          if ((index >= skip) & (index < skip + limit)) {
            return (
              <ProductCard
                key={product.id}
                product={product}
                setDataState={setDataState}
                dataState={dataState}
              />
            );
          }
          return null;
        })}
      </ProductListStyled>
    </div>
  );
};

export default ListProduct;
