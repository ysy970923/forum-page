import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import BgImage from 'common/assets/image/foodDelivery/feature-bg.png';
const QualityFeaturesWrapper = styled.section`
  background-color: #d1f4f3;
  background-image: url(${BgImage?.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
  padding-top: 90px;
  padding-bottom: 20px;
  @media (max-width: 1440px) {
    padding-bottom: 50px;
    background-position: center center;
  }
  @media (max-width: 480px) {
    padding-top: 70px;
    padding-bottom: 30px;
  }
  h2 {
    margin: 0;
    font-size: 26px;
    color: ${themeGet('colors.darkText', '#0F2137')};
    font-weight: 700;
    text-align: center;
    margin-bottom: 70px;
    @media (max-width: 1440px) {
      margin-bottom: 50px;
    }
    @media (max-width: 1199px) {
      font-size: 24px;
    }
    @media (max-width: 480px) {
      font-size: 22px;
    }
    @media (max-width: 425px) {
      max-width: 290px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .postWrap {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      margin-left: -10px;
      margin-right: -10px;
    }
  }
  .post {
    flex: 0 0 33.333%;
    text-align: center;
    margin-bottom: 70px;
    @media (max-width: 1440px) {
      margin-bottom: 40px;
    }
    @media (max-width: 768px) {
      max-width: 270px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 10px;
      padding-right: 10px;
    }
    @media (max-width: 480px) {
      flex: 0 0 50%;
    }
    @media (max-width: 375px) {
      flex: 0 0 100%;
    }
    img {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 25px;
    }
    h3 {
      font-size: 16px;
      font-weight: 700;
      color: #09131f;
      margin: 0;
      margin-bottom: 15px;
    }
    p {
      margin: 0;
      color: #343d48;
      font-size: 16px;
      line-height: 1.87;
      max-width: 261px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default QualityFeaturesWrapper;
