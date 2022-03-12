import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import arrowImage from 'common/assets/image/foodDelivery/how-works-arrow.svg';
const HowWorksWrapper = styled.section`
  padding-top: 140px;
  padding-bottom: 140px;
  @media (max-width: 1550px) {
    padding-top: 90px;
    padding-bottom: 90px;
  }
  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  .container {
    max-width: 1430px;
    @media (max-width: 1440px) {
      max-width: 1200px;
    }
    h2 {
      text-align: center;
      margin-bottom: 90px;
      font-weight: bold;
      color: ${themeGet('colors.darkText', '#0F2137')};
      font-size: 26px;
      @media (max-width: 1550px) {
        margin-bottom: 60px;
      }
      @media (max-width: 1199px) {
        font-size: 24px;
      }
      @media (max-width: 768px) {
        margin-bottom: 0;
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
  }
  .postWrap {
    display: flex;
    flex-wrap: wrap;
    counter-reset: howWorksNumber;
  }
  .post {
    flex: 0 0 33.333%;
    text-align: center;
    counter-increment: howWorksNumber;
    @media (max-width: 768px) {
      flex: 0 0 100%;
      max-width: 270px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 50px;
    }
    @media (max-width: 425px) {
      margin-top: 30px;
    }
    img {
      margin-left: auto;
      margin-right: auto;
      display: block;
    }
    .imageBox {
      position: relative;
      display: inline-block;
      &::before {
        display: flex;
        width: 50px;
        height: 50px;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: ${themeGet('colors.primary')};
        content: counters(howWorksNumber, '.', decimal-leading-zero);
        position: absolute;
        top: 0;
        left: 25px;
        color: #fff;
        font-family: 'Work Sans';
        border-radius: 50%;
        font-weight: 600;
        font-size: 24px;
        @media (max-width: 1199px) {
          font-size: 18px;
        }
      }

      &::after {
        content: '';
        width: 172px;
        height: 37px;
        background-image: url(${arrowImage?.src});
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%) translateX(calc(100% + 20px));
        @media (max-width: 1440px) {
          display: none;
        }
      }
    }
    h3 {
      font-weight: bold;
      font-size: 19px;
      color: ${themeGet('colors.darkText', '#0F2137')};
      margin: 0;
      line-height: 1;
      margin-top: 30px;
      margin-bottom: 15px;
      @media (max-width: 1199px) {
        font-size: 17px;
      }
    }
    p {
      font-size: 16px;
      line-height: 1.87;
      margin: 0;
      max-width: 325px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 15px;
      @media (max-width: 1199px) {
        font-size: 14px;
      }
    }
    .button {
      display: inline-flex;
      letter-spacing: -0.1px;
      font-size: 16px;
      font-weight: 700;
      color: ${themeGet('colors.secondary')};
      i {
        margin-left: 10px;
      }
    }
  }
  .post:nth-of-type(2) {
    .imageBox::after {
      transform-origin: center center;
      transform: translateY(35%) translateX(calc(100% + 20px)) rotateX(180deg);
    }
  }
  .post:last-child {
    .imageBox::after {
      display: none;
    }
    p {
      max-width: 285px;
    }
  }
`;

export default HowWorksWrapper;
