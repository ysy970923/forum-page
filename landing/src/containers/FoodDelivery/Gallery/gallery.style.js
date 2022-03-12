import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const GalleryWrapper = styled.section`
  padding-top: 150px;
  padding-bottom: 90px;
  @media (max-width: 768px) {
    padding-top: 80px;
  }
  .galleryBox {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 30px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
    img {
      width: 100%;
      @media (max-width: 768px) {
        margin-bottom: 30px;
      }
    }
    .galleryItem:nth-of-type(even) {
      margin-top: 50px;
      @media (max-width: 768px) {
        margin-top: 0;
      }
    }
  }
  .content {
    text-align: center;
    max-width: 748px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 80px;
    @media (max-width: 1199px) {
      max-width: 600px;
    }
    @media (max-width: 768px) {
      padding-top: 30px;
      max-width: 90%;
    }
    h2 {
      font-size: 36px;
      color: ${themeGet('colors.darkText', '#0F2137')};
      line-height: 1.39;
      letter-spacing: -0.01em;
      font-weight: bold;
      margin-bottom: 0;
      max-width: 545px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
      @media (max-width: 1550px) {
        font-size: 32px;
      }
      @media (max-width: 1199px) {
        font-size: 28px;
        max-width: 470px;
      }
      @media (max-width: 768px) {
        font-size: 24px;
        max-width: 400px;
      }
      @media (max-width: 480px) {
        font-size: 22px;
      }
    }
    p {
      letter-spacing: 0.1px;
      color: ${themeGet('colors.darkText', '#0F2137')};
      font-size: 17px;
      line-height: 2.06;
      margin-bottom: 0;
      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 2;
      }
    }
  }
`;

export default GalleryWrapper;
