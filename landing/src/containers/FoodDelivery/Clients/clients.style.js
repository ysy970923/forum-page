import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ClientsWrapper = styled.section`
  padding-top: 100px;
  @media (max-width: 768px) {
    padding-top: 70px;
  }
  h2 {
    color: ${themeGet('colors.darkText', '#0F2137')};
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    margin: 0;
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
  .clientImages {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1045px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 35px;
    @media (max-width: 768px) {
      margin-left: -20px;
      justify-content: center;
    }
    img {
      margin-top: 30px;
      @media (max-width: 768px) {
        margin-left: 20px;
        margin-top: 15px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
        margin-top: 30px;
      }
    }
    @media (max-width: 1440px) {
      margin-top: 20px;
    }
  }
`;

export default ClientsWrapper;
