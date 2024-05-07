import React from "react";
import styled from "styled-components";
import Button from "../../../../componets/common/button/Button";
const AboutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  align-items: center;
  margin-top: 10spx;
`;
const StyledQuestionTitle = styled.div`
  font-size: 15px;
  font-family: "Noto Sans";
  font-weight: 400;
  line-height: 20.5px;
  text-align: left;
`;
const QuestionTitles = [
  " 近所の人のユニークなサービスを体験できるみんなのサービス",
  "近所の人のサービスを購入して体験してみましょう。プライベートレッスンから家事代行までジャンルは様々。",
];

const About = () => {
  return (
    <AboutStyled>
      <StyledQuestionTitle>
        {QuestionTitles.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </StyledQuestionTitle>
      <div>
        <Button className="ant-btn-default">サービスを出品する</Button>
      </div>
    </AboutStyled>
  );
};

export default About;
