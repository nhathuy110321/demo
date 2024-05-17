import styled from 'styled-components'

export const CardStyled = styled.div`
  padding-top: 15px;
  border-radius: 10px;
  border: 1px solid #d1d1d1;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
`
export const CardTopStyled = styled.div`
  padding: 0px 15px;
  position: relative;
  margin-top: 30px;
  height: 300px;
`
export const CardImgWrapperStyled = styled.div`
  &:hover {
    overflow: hidden;
  }
`
export const CardImgStyled = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 180px;
  box-sizing: border-box;
  &:hover {
    width: 100%;
    transition: transform 0.3s ease;
    transform: scale(1.2);
  }
`
export const UserAvtStyled = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
`
export const UserStyled = styled.div`
  padding: 5px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
`
export const UserNameStyled = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16.5px;
`
export const ProductNameStyled = styled.h3`
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
`
export const DescrioptionStyled = styled.span`
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
`
export const CardBottomStyled = styled.div`
  background-color: #f9f9f9;
  margin-top: 10px;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const QuantityStyled = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
export const QuantityImgStyled = styled.img`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #575757;
`
export const QuantityCount = styled.span`
  font-size: 18px;
`
export const QuantityPriceStyled = styled.span`
  font-family: 'Noto Sans';
  font-size: 18px;
  font-weight: 700;
  line-height: 24.5px;
`
export const CertifierStyled = styled.div`
  position: absolute;
  top: 95px;
  background-color: #6a983c;
  padding: 10px 0;
  width: 70%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  &::after {
    content: '';
    position: absolute;
    left: -0.1px;
    bottom: -15px;
    border-top: 16px solid #46760a;
    border-left: 16px solid transparent;
    background-color: transparent;
  }
`
export const CertifierSpanStyled = styled.span`
  font-size: 14px;
`
export const FavouriteStyled = styled.div`
  position: absolute;
  top: 95px;
  right: 30px;
`
export const ButtonGroupStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  align-items: center;

  .ant-btn {
    width: 45px;
    height: 45px;
  }
`
export const FormUpdateStyled = styled.div`
  .ant-input {
    width: 100% !important;
  }
  #description {
    font-size: 1.2rem;
    border-color: ${({ theme }) => theme.primary} !important ;
  }
  /* #id {
      display: none;
    } */
`
export const DivIdStyled = styled.div`
  display: none;
`
export const LabelStyled = styled.label`
  display: inline-block;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.textPrimary};
`
