import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: left;
  border-top: 1px solid #d1d1d1;
  padding: 10px 20px;
  gap: 45px;
`;
const FooterTitleStyled = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: left;
  margin-bottom: 20px;
`;
const FooterContentStyled = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

const SpanContentStyled = styled.span`
  margin-bottom: 15px;
  font-family: "Noto Sans";
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;
const FooterComtent1 = [
  "ニュース2",
  "会社概",
  "要利用規約",
  "特定商取引に基づく表記",
  "個人情報保護方針",
];
const FooterComtent2 = [
  "報酬は仕事前に事務局に支払われ、評価・完了後に振り込まれます。",
  "トラブルを避けるために、直接契約や金銭の手渡し、連絡 先の交換はご遠慮いただいています。 必ずエニタイムズのチャット内でやりとりして下さい。 どうしても連絡先の交  換が必要な場合、事務局までご連絡ください。",
];
const FooterComtent3 = [
  `お支払いは、クレジットカードまたはPayPal決済がご利用いただけます。
     クレジットカードの場合は、 VISA, Master Card, JCBがご利用いただけます。 
     PayPalの場合は、 VISA, Master Card, AMEX, JCBがご利用いただけます。 
    クレジットカードをお持ちでない方は事務局までご連絡ください。`,
];
const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <FooterTitleStyled>お問い合わせ</FooterTitleStyled>
        <FooterContentStyled>
          {FooterComtent1.map((link) => (
            <SpanContentStyled key={link}>{link}</SpanContentStyled>
          ))}
        </FooterContentStyled>
      </div>
      <div>
        <FooterTitleStyled>お問い合わせ</FooterTitleStyled>
        <FooterContentStyled>
          {FooterComtent2.map((link) => (
            <SpanContentStyled key={link}>{link}</SpanContentStyled>
          ))}
        </FooterContentStyled>
      </div>
      <div>
        <FooterTitleStyled>お問い合わせ</FooterTitleStyled>
        <FooterContentStyled>
          {FooterComtent3.map((link) => (
            <SpanContentStyled key={link}>{link}</SpanContentStyled>
          ))}
          <img src="sponsor.png" alt=""></img>
        </FooterContentStyled>
      </div>
    </FooterStyled>
  );
};

export default Footer;
