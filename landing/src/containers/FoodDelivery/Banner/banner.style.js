import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BannerWrapper = styled.section`
  background-color: #fff2d9;
  padding-top: 120px;
  padding-bottom: 100px;
  @media (max-width: 1550px) {
    padding-bottom: 70px;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 1551px) {
      max-width: 1430px;
    }
  }
  .content {
    flex: 0 0 46%;
    padding-top: 130px;
    @media (max-width: 1550px) {
      padding-top: 80px;
    }
    @media (max-width: 1199px) {
      padding-top: 40px;
    }
    @media (max-width: 768px) {
      flex: 0 0 100%;
      text-align: center;
    }
    @media (max-width: 768px) {
      padding-top: 0px;
    }
    h2 {
      font-weight: bold;
      font-size: 58px;
      line-height: 1.29;
      letter-spacing: -2px;
      color: #081c27;
      margin-bottom: 15px;
      @media (max-width: 1550px) {
        font-size: 48px;
        max-width: 550px;
      }
      @media (max-width: 1199px) {
        font-size: 38px;
      }
      @media (max-width: 768px) {
        max-width: 450px;
        margin-left: auto;
        margin-right: auto;
      }
      @media (max-width: 480px) {
        font-size: 32px;
        max-width: 360px;
      }
      @media (max-width: 425px) {
        font-size: 28px;
        max-width: 310px;
      }
    }
    .paragraph {
      font-size: 18px;
      font-family: 'Work Sans';
      line-height: 2.11;
      letter-spacing: -0.3px;
      color: #00334e;
      margin-bottom: 0;
      opacity: 0.8;
      @media (max-width: 1550px) {
        font-size: 16px;
      }
      @media (max-width: 1199px) {
        max-width: 400px;
      }
      @media (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
      }
      @media (max-width: 480px) {
        font-size: 15px;
        max-width: 350px;
      }
    }
    .tagLine {
      font-size: 15px;
      margin-bottom: 0;
      color: #33596a;
      font-family: 'DM Sans';
      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
  }
  .image {
    flex: 0 0 54%;
    background-color: #fff2d9;
    @media (max-width: 768px) {
      flex: 0 0 100%;
      display: none;
    }
    @media (max-width: 768px) {
      margin-top: 50px;
    }
    .react-reveal {
      background-color: inherit;
    }
    img {
      mix-blend-mode: multiply;
      @media (max-width: 1550px) {
        width: 90%;
        margin-left: auto;
      }
      @media (max-width: 1199px) {
        margin-top: 60px;
      }
    }
  }
  .bannerForm {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    max-width: 480px;
    margin-top: 40px;
    margin-bottom: 30px;
    @media (max-width: 1550px) {
      max-width: 430px;
    }
    @media (max-width: 1199px) {
      max-width: 400px;
    }
    @media (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 425px) {
      margin-top: 30px;
      margin-bottom: 20px;
    }
    .mapPin {
      position: absolute;
      top: 50%;
      left: 25px;
      transform: translateY(-50%);
      z-index: 10;
    }
    input {
      width: 100%;
      max-width: 480px;
      background-color: #fff;
      border-radius: 5px;
      border: none;
      outline: none;
      height: 70px;
      border-radius: 5px;
      font-size: 16px;
      letter-spacing: -0.3px;
      color: rgba(0, 51, 78, 0.4);
      padding-left: 60px;
      padding-right: 80px;
      transition: all 500ms ease;
      &:focus {
        box-shadow: 0 0 0 1px ${themeGet('colors.blackTwo')};
      }
      @media (max-width: 1550px) {
        height: 60px;
        max-width: 430px;
        padding-right: 70px;
      }
      @media (max-width: 1199px) {
        max-width: 400px;
      }
    }
    ::placeholder {
      opacity: 1;
      color: rgba(0, 51, 78, 0.4);
    }
    button[type='submit'] {
      border: none;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 70px;
      border-radius: 5px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      background-color: ${themeGet('colors.blackTwo')};
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      opacity: 1;
      cursor: pointer;
      transition: opacity 500ms ease;
      &:hover {
        opacity: 0.85;
      }
      @media (max-width: 1550px) {
        height: 60px;
        width: 70px;
      }
    }
  }
  .buttonWrap {
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
  .bannerAppBtn {
    background-color: #fff2d9;
    border: 1px solid #081c27;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding-left: 17px;
    padding-right: 17px;
    text-align: left;
    color: #081c27;
    padding-top: 14.5px;
    padding-bottom: 14.5px;
    transition: all 500ms ease;
    @media (max-width: 414px) {
      padding-left: 10px;
      padding-right: 10px;
    }

    + .bannerAppBtn {
      margin-left: 16px;
      @media (max-width: 414px) {
        margin-left: 10px;
      }
    }
    img {
      flex-shrink: 0;
      filter: invert(0%);
      transition: 500ms ease;
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
      line-height: 1;
      margin-top: 5px;
      @media (max-width: 480px) {
        font-size: 16px;
      }
    }
    &:hover {
      background-color: #081c27;
      color: #fff;
      img {
        filter: invert(100%);
      }
    }
  }
`;

export default BannerWrapper;
