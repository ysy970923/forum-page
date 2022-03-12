import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const AvailableRestaurantsWrapper = styled.section`
  padding-top: 140px;
  @media (max-width: 1550px) {
    padding-top: 90px;
  }
  @media (max-width: 768px) {
    padding-top: 70px;
  }
  h2 {
    text-align: center;
    margin-bottom: 0px;
    font-weight: bold;
    color: ${themeGet('colors.darkText', '#0F2137')};
    font-size: 26px;
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
    margin: 0 -15px;
  }
  .post {
    flex: 0 0 33.333%;
    max-width: 33.333%;
    padding: 0 15px;
    margin-top: 50px;
    @media (max-width: 1550px) {
      margin-top: 40px;
    }
    @media (max-width: 768px) {
      flex: 0 0 50%;
      max-width: 50%;
      margin-top: 30px;
    }
    @media (max-width: 480px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
    img {
      transform: translateY(0px);
      transition: transform 500ms ease;
    }
    &:hover {
      img {
        transform: translateY(-10px);
      }
    }
    h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
      margin-top: 20px;
      color: ${themeGet('colors.darkText', '#0F2137')};
      @media (max-width: 1199px) {
        font-size: 17px;
      }
      @media (max-width: 768px) {
        font-size: 16px;
      }
      a {
        color: inherit;
        transition: all 500ms ease;
        &:hover {
          color: ${themeGet('colors.secondary')};
        }
      }
    }
  }
  .postMeta {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    a {
      transition: all 500ms ease;
      font-size: 16px;
      color: ${themeGet('colors.darkText', '#0F2137')};
      @media (max-width: 1199px) {
        font-size: 15px;
      }
      &:hover {
        color: ${themeGet('colors.primary')};
      }
    }
    a:not(:last-of-type)::after {
      content: '•';
      margin-left: 10px;
      margin-right: 10px;
      &:hover {
        color: ${themeGet('colors.darkText', '#0F2137')};
      }
    }
  }
  .text-center {
    text-align: center;
    margin-top: 50px;
    @media (max-width: 1550px) {
      margin-top: 40px;
    }
    @media (max-width: 768px) {
      margin-top: 30px;
    }
  }
  .MoreButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${themeGet('colors.primary')};
    color: #fffaf0;
    transition: all 500ms ease;
    padding: 17px 26px;
    border-radius: 100px;
    font-weight: 700;
    i {
      margin-left: 10px;
    }
    &:hover {
      background-color: ${themeGet('colors.primaryHover')};
    }
  }
`;

export default AvailableRestaurantsWrapper;
