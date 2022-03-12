import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CallToActionWrapper = styled.section`
  padding-top: 65px;
  @media (max-width: 1199px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 575px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  .container {
    background-color: #fffaf0;
    display: flex;
    flex-direction: row-reverse;
    border-radius: 50px;
    justify-content: space-between;
    @media (max-width: 1199px) {
      flex-wrap: wrap;
    }
    @media (max-width: 768px) {
      flex-direction: inherit;
    }
  }
  .content {
    flex: 0 0 50%;
    padding-top: 90px;
    padding-left: 85px;
    @media (max-width: 1535px) {
      position: relative;
      padding-left: 55px;
    }
    @media (max-width: 1199px) {
      padding-left: 30px;
      margin-left: 0;
      padding-top: 40px;
      padding-bottom: 40px;
      left: 0px;
    }
    @media (max-width: 768px) {
      flex: 0 0 100%;
      margin-left: auto;
      max-width: 450px;
      margin-right: auto;
      padding-top: 40px;
      padding-bottom: 50px;
      text-align: center;
      padding-left: 0px;
    }
    h2 {
      white-space: pre-line;
      font-size: 42px;
      line-height: 1.31;
      letter-spacing: -0.02em;
      color: ${themeGet('colors.darkText', '#0F2137')};
      font-weight: 700;
      margin-bottom: 15px;
      @media (max-width: 1550px) {
        font-size: 36px;
      }
      @media (max-width: 1199px) {
        white-space: normal;
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
      color: ${themeGet('colors.darkText', '#0F2137')};
      white-space: pre-line;
      margin-bottom: 30px;
      font-size: 18px;
      line-height: 1.94;
      @media (max-width: 1199px) {
        white-space: normal;
        margin-bottom: 20px;
      }
      @media (max-width: 768px) {
        white-space: normal;
        font-size: 16px;
        line-height: 2;
      }
    }
  }
  .sectionImage {
    mix-blend-mode: darken;
    position: relative;
    margin-top: -65px;
    right: -20px;
    @media (max-width: 1550px) {
      right: -40px;
    }
    @media (max-width: 1199px) {
      right: 0;
      max-width: 50%;
    }
    @media (max-width: 768px) {
      max-width: 100%;
    }
    @media (max-width: 414px) {
      height: 269px;
    }
  }
  .callButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${themeGet('colors.primary')};
    color: #fffaf0;
    transition: all 500ms ease;
    padding: 17px 26px;
    font-weight: 700;
    border-radius: 100px;
    i {
      margin-left: 10px;
    }
    &:hover {
      background-color: ${themeGet('colors.primaryHover')};
    }
  }
`;

export default CallToActionWrapper;
