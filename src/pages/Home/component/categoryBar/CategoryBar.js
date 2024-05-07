import styled from "styled-components";
import devices from "../../../../theme/device";

const CategorybarStyled = styled.div`
  padding: 20px;

  @media ${devices.mobile} {
    display: none;
  }
`;

const CategoryHeadStyled = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: calc(24 / 18);
`;

const CategoryItemStyled = styled.div`
  margin-top: 19px;
`;

const CategoryTitleStyled = styled.div`
  font-weight: 700;
  margin-top: 19px;
  margin-bottom: 12px;
  line-height: calc(19 / 14);
`;

const CategoryNameStyled = styled.div`
  margin-bottom: 12px;
  line-height: calc(19 / 14);
  color: ${({ theme }) => theme.gray};
`;
const CategoryName1 = [
  "家事",
  "修理・組立",
  "ペット",
  "高齢者",
  "趣味・習い事",
];
const CategoryName2 = [
  "デフォルト順",
  "新着順",
  "金額低い順",
  "金額低い順",
  "人気順",
  "販売実績順",
];
const CategoryName3 = [
  "0円から",
  "100円から",
  "1000円から",
  "5000円から",
  "10000円から",
];
const CategoryBar = () => {
  return (
    <CategorybarStyled>
      <CategoryHeadStyled>
        <img src="iconMenu.png " alt="" />
        <span>カテゴリー</span>
      </CategoryHeadStyled>

      <CategoryItemStyled>
        <CategoryTitleStyled>すべて</CategoryTitleStyled>
        <ul>
          <CategoryNameStyled>
            {CategoryName1.map((link, index) => (
              <CategoryNameStyled key={index}>{link}</CategoryNameStyled>
            ))}
          </CategoryNameStyled>
        </ul>
      </CategoryItemStyled>
      <CategoryItemStyled>
        <CategoryTitleStyled>すべて</CategoryTitleStyled>
        <ul>
          <CategoryNameStyled>
            {CategoryName2.map((link, index) => (
              <CategoryNameStyled key={index}>{link}</CategoryNameStyled>
            ))}
          </CategoryNameStyled>
        </ul>
      </CategoryItemStyled>
      <CategoryItemStyled>
        <CategoryTitleStyled>すべて</CategoryTitleStyled>
        <ul>
          <CategoryNameStyled>
            {CategoryName3.map((link, index) => (
              <CategoryNameStyled key={index}>{link}</CategoryNameStyled>
            ))}
          </CategoryNameStyled>
        </ul>
      </CategoryItemStyled>
    </CategorybarStyled>
  );
};

export default CategoryBar;
