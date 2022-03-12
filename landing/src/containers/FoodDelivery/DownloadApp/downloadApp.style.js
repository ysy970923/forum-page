import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const DownloadAppWrapper = styled.section`
  padding-top: 150px;
  @media (max-width: 1550px) {
    padding-top: 100px;
  }
  @media (max-width: 768px) {
    padding-top: 80px;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  .image {
    flex: 0 0 50%;
    @media (max-width: 768px) {
      flex: 0 0 100%;
    }
    img {
      @media (max-width: 768px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .content {
    flex: 0 0 50%;
    padding-left: 80px;
    padding-top: 100px;
    @media (max-width: 1550px) {
      padding-left: 60px;
    }
    @media (max-width: 1199px) {
      padding-left: 30px;
      padding-top: 20px;
    }
    @media (max-width: 768px) {
      flex: 0 0 100%;
      padding-left: 0;
      padding-top: 50px;
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 480px) {
      max-width: 100%;
    }
    h2 {
      color: ${themeGet('colors.darkText', '#0F2137')};
      margin: 0;
      letter-spacing: -0.02em;
      font-size: 40px;
      line-height: 1.37;
      font-weight: 700;
      margin-bottom: 20px;
      @media (max-width: 1550px) {
        font-size: 36px;
      }
      @media (max-width: 1199px) {
        font-size: 32px;
      }
      @media (max-width: 768px) {
        font-size: 28px;
        text-align: center;
      }
      @media (max-width: 480px) {
        font-size: 23px;
      }
    }
    p {
      color: ${themeGet('colors.darkText', '#0F2137')};
      margin: 0;
      font-size: 16px;
      line-height: 2;
      max-width: 515px;
      margin-bottom: 30px;
      @media (max-width: 768px) {
        text-align: center;
      }
    }
  }
  .buttonWrap {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
  .downloadAppBtn {
    background-color: #081c27;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding-left: 17px;
    padding-right: 17px;
    color: #fff;
    padding-top: 14.5px;
    padding-bottom: 14.5px;
    @media (max-width: 414px) {
      padding-left: 10px;
      padding-right: 10px;
    }
    + .downloadAppBtn {
      margin-left: 16px;
      @media (max-width: 414px) {
        margin-left: 10px;
      }
    }
    img {
      flex-shrink: 0;
    }
    .btnContent {
      margin-left: 17px;
      @media (max-width: 480px) {
        margin-left: 10px;
      }
      @media (max-width: 414px) {
        margin-left: 5px;
      }
    }
    span {
      margin: 0;
      display: block;
      font-size: 13px;
      line-height: 1;
      letter-spacing: 0.2px;
      opacity: 0.8;
    }
    p {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
      color: #fff;
      line-height: 1;
      margin-top: 5px;
    }
  }
`;

export default DownloadAppWrapper;
