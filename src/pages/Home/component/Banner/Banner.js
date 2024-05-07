import React from "react";
import styled from "styled-components";

const BannerStyled = styled.div`
  --gap: 35px;
  width: 100%;
  display: flex;
  gap: var(--gap);
  /* justify-content: space-between; */
`;

const BannerImgStyled = styled.img`
  /* max-width: calc(50% - calc(var(--gap) / 2)); */
  width: 100%;
  object-fit: cover;
`;

const Banner = () => {
  return (
    <BannerStyled>
      <div>
        <BannerImgStyled src="banner1.png" />
      </div>
      <div>
        <BannerImgStyled src="banner2.png" />
      </div>
    </BannerStyled>
  );
};

export default Banner;
