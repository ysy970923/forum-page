import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FooterWrapper = styled.footer`
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 75px;
    padding-bottom: 40px;
    @media (max-width: 1199px) {
      flex-direction: column;
      justify-content: center;
      padding-top: 40px;
    }
  }
  .leftText {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width: 414px) {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    span {
      margin: 0;
    }
  }
  .footerText {
    display: flex;
    align-items: center;
    margin-left: 15px;
    @media (max-width: 414px) {
      margin-left: 0;
      margin-top: 10px;
    }
    span {
      font-size: 15px;
      color: #09131f;
      display: block;
      line-height: 1;
      margin-right: 10px;
    }
    a {
      display: block;
      line-height: 1;
      color: ${themeGet('colors.secondary')};
      border-bottom: 1px solid ${themeGet('colors.secondary')};
    }
  }
  .footerMenu {
    display: flex;
    align-items: center;
    @media (max-width: 1199px) {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    a {
      color: ${themeGet('colors.darkText', '#0F2137')};
      font-size: 15px;
      transition: all 500ms ease;
      display: flex;
      &:hover {
        color: ${themeGet('colors.secondary')};
      }
      + a {
        margin-left: 35px;
      }
    }
  }
  .socialLinks {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    span {
      margin: 0;
      color: #09131f;
      font-size: 15px;
      display: block;
    }
    a {
      display: block;
      margin-left: 15px;
    }
  }
  .logo {
    width: 150px;
  }
`;

export default FooterWrapper;
