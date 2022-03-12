import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const PopularCategoryWrapper = styled.section`
  text-align: center;
  padding-top: 140px;
  @media (max-width: 1550px) {
    padding-top: 90px;
  }
  @media (max-width: 768px) {
    padding-top: 70px;
  }
  .container {
    @media (min-width: 1551px) {
      max-width: 1330px;
    }
  }
  h2 {
    text-align: center;
    margin-bottom: 50px;
    font-weight: bold;
    color: ${themeGet('colors.darkText', '#0F2137')};
    font-size: 26px;
    @media (max-width: 1199px) {
      font-size: 24px;
      margin-bottom: 40px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
      font-size: 22px;
    }
    @media (max-width: 425px) {
      max-width: 290px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .categoryList {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    align-items: center;
    justify-content: center;
    margin-top: -10px;
  }
  .categoryItem {
    display: flex;
    align-items: center;
    color: ${themeGet('colors.darkText', '#0F2137')};
    font-size: 18px;
    font-weight: 500;
    border-radius: 50px;
    margin-left: 10px;
    padding: 13px 26px;
    margin-top: 10px;
    background-color: ${themeGet('colors.grayBackground')};
    transition: all 500ms ease;
    &:hover {
      background-color: ${themeGet('colors.primary')};
      color: #fff;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export default PopularCategoryWrapper;
