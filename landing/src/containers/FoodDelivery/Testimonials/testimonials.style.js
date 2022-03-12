import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const TestimonialsArea = styled.section`
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
  }
  .mainContent {
    flex: 0 0 45%;
    max-width: 45%;
    padding-right: 65px;
    padding-top: 200px;
    @media (max-width: 1199px) {
      flex: 0 0 100%;
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
      padding-top: 70px;
      padding-right: 15px;
    }
    @media (max-width: 425px) {
      max-width: 100%;
    }
    h2 {
      margin-bottom: 0px;
      font-weight: bold;
      color: ${themeGet('colors.darkText', '#0F2137')};
      font-size: 26px;
      margin-bottom: 50px;
      @media (max-width: 1199px) {
        font-size: 24px;
        text-align: center;
        margin-bottom: 30px;
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
  .mainImage {
    flex: 0 0 55%;
    @media (max-width: 1199px) {
      flex: 0 0 100%;
    }
    img {
      position: relative;
      left: 80px;

      @media (max-width: 1199px) {
        left: 0;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .slide__wrapper {
    @media (min-width: 1200px) {
      position: relative;
      right: 55px;
    }
  }
  .testimonial_card {
    h3 {
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      line-height: 22px;
      color: #19191b;
      margin-bottom: 5px;
      text-align: center;
      display: none;
      @media (max-width: 1600px) {
        font-size: 16px;
      }
      @media (max-width: 575px) {
        display: block;
      }
    }
    span {
      font-size: 15px;
      line-height: 1;
      color: #696871;
      text-align: center;
      display: none;
      @media (max-width: 575px) {
        display: block;
      }
    }
  }
  .testimonials_content {
    display: inline-flex;
    align-items: flex-start;
    @media (max-width: 425px) {
      flex-direction: column;
    }
    img {
      position: relative;
      left: 5px;
      top: -5px;
      margin-right: 15px;
      @media (max-width: 1199px) {
        margin-right: 0;
        left: 15px;
      }
      @media (max-width: 425px) {
        display: block;
        left: auto;
        top: auto;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 15px;
      }
    }
    p {
      font-size: 20px;
      line-height: 2;
      color: #36526c;
      font-style: italic;
      @media (max-width: 1199px) {
        text-align: center;
      }
      @media (max-width: 575px) {
        font-size: 18px;
        line-height: 2;
      }
    }
  }
  .glide__bullets {
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 1199px) {
      justify-content: center;
      margin-top: 20px;
    }
    @media (max-width: 575px) {
      margin-top: 30px;
    }
    .glide__bullet + .glide__bullet {
      margin-left: 15px;
      @media (max-width: 991px) {
        margin-left: 15px;
      }
    }
    .glide__bullet {
      cursor: pointer;
      border: none;
      outline: none;
      background-color: transparent;
      -webkit-appearance: none;
      padding: 0;
      width: 195px;
      display: flex;
      align-items: center;
      text-align: left;
      opacity: 0.3;
      transition: all 500ms ease;
      @media (max-width: 575px) {
        width: auto;
      }
      > img {
        width: 50px;
        border-radius: 50%;
        flex-shrink: none;
        margin-right: 15px;
        @media (max-width: 575px) {
          margin-right: 0;
        }
      }
      h3 {
        margin: 0;
        font-weight: 500;
        font-size: 17px;
        line-height: 22px;
        color: #19191b;
        margin-bottom: 5px;
        @media (max-width: 1600px) {
          font-size: 16px;
        }
        @media (max-width: 575px) {
          display: none;
        }
      }
      span {
        font-size: 15px;
        line-height: 1;
        color: #696871;
        @media (max-width: 575px) {
          display: none;
        }
      }
      &:hover,
      &--active {
        opacity: 1;
      }
    }
  }
  .glide__bullets-two {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 100px;
    margin-top: 45px;
    @media (max-width: 1199px) {
      padding-right: 0;
    }
    .glide__bullet {
      width: 13px;
      height: 8px;
      background-color: #e2e6ea;
      border-radius: 10px;
      opacity: 1;
      transition: all 500ms ease;
      img {
        display: none;
      }
      + .glide__bullet {
        margin-left: 8px;
      }
      &:hover {
        background-color: #afb9c3;
      }
      &--active {
        background-color: #afb9c3;
        width: 20px;
      }
    }
  }
`;
export default TestimonialsArea;
