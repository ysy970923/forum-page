import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ProductDeliveryWrapper = styled.section`
  padding-bottom: 150px;
  @media (max-width: 1550px) {
    padding-bottom: 100px;
  }
  @media (max-width: 768px) {
    padding-bottom: 80px;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 1551px) {
      max-width: 1330px;
    }
  }
  @keyframes productDeliveryImage {
    0%,
    100% {
      transform: translateY(0px);
    }
    25%,
    75% {
      transform: translateY(15px);
    }
    50% {
      transform: translateY(30px);
    }
  }
  .image {
    flex: 0 0 50%;
    @media (max-width: 768px) {
      flex: 0 0 100%;
    }
    img {
      animation: productDeliveryImage 7s linear infinite;
      @media (max-width: 768px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 80%;
      }
    }
  }
  .content {
    flex: 0 0 50%;
    padding-left: 100px;
    padding-top: 60px;
    @media (max-width: 1550px) {
      padding-left: 60px;
    }
    @media (max-width: 1199px) {
      padding-left: 30px;
    }
    @media (max-width: 768px) {
      flex: 0 0 100%;
      padding-left: 0;
      padding-top: 70px;
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 480px) {
      max-width: 90%;
    }
    h2 {
      margin: 0;
      font-weight: 700;
      font-size: 40px;
      color: ${themeGet('colors.darkText', '#0F2137')};
      line-height: 1.37;
      margin-bottom: 15px;
      @media (max-width: 1550px) {
        font-size: 36px;
      }
      @media (max-width: 1199px) {
        font-size: 32px;
      }
      @media (max-width: 768px) {
        font-size: 28px;
      }
      @media (max-width: 480px) {
        font-size: 23px;
      }
    }
    p {
      margin: 0;
      font-size: 16px;
      line-height: 2;
      color: ${themeGet('colors.darkText', '#0F2137')};
    }
  }
  .postWrap {
    counter-reset: postNumber;
  }
  .post {
    counter-increment: postNumber;
    display: flex;
    align-items: center;
    margin-top: 40px;
    @media (max-width: 1550px) {
      margin-top: 25px;
    }
    @media (max-width: 480px) {
      align-items: flex-start;
    }
    &::before {
      color: #09131f;
      opacity: 0.2;
      font-size: 64px;
      font-weight: 300;
      font-family: 'Work Sans', sans-serif;
      letter-spacing: -0.01em;
      line-height: 1;
      content: counters(postNumber, '.', decimal-leading-zero);
      margin-right: 30px;
      width: 73px;
      display: block;
      flex-shrink: 0;
      @media (max-width: 1550px) {
        font-size: 50px;
        margin-right: 20px;
        width: 60px;
      }
      @media (max-width: 1199px) {
        width: 50px;
      }
    }
    h3 {
      margin: 0;
      font-size: 17px;
      font-weight: 700;
      color: #09131f;
      letter-spacing: -0.01em;
      margin-bottom: 20px;
      @media (max-width: 1550px) {
        margin-bottom: 10px;
      }
    }
    p {
      margin: 0;
      font-size: 15px;
      line-height: 1.87;
      color: #343d48;
    }
  }
`;

export default ProductDeliveryWrapper;
