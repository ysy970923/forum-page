import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body{
    font-family: 'DM Sans', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'DM Sans', sans-serif;
  }
  html, html a, h1, h2, h3, h4, h5, h6, a, p, li, dl, th, dt, input, textarea, span, div {
    text-shadow: none;
  }
  section {
    position: relative;
  }

  .sr-only {
    display: flex;
    border: 0 !important;
    -webkit-clip: rect(1px,1px,1px,1px) !important;
    clip: rect(1px,1px,1px,1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }

  .container {
    width: 100%;
    max-width: 1430px;
    padding-left: 15px;
    padding-right: 15px;
    @media(max-width: 1199px) {
      padding-left: 40px;
      padding-right: 40px;
    }
    @media(max-width: 480px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media(max-width: 1550px) {
    .container {
      max-width: 1170px;
    }
  }

  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #343d48;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: #eb4d4b;
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: #eb4d4b;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: #eb4d4b;
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: #eb4d4b;
        transform: rotate(45deg);
        display: block;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  min-width: 300px;
  position: relative;

  overflow: hidden;
  .sticky-nav-active {
    .food_delivery_navbar {
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;
      .navbar_button {
        .reusecore__button {
          background-color: #fff;
          &:hover {
            background-color: #00334e;
            color: #fff;
          }
        }
      }
      .navbar_button_two {
        .reusecore__button {
          &:hover {
            background-color: #2e8dff;
            color: #fff;
          }
        }
      }
      .reusecore-drawer__handler {
        .hamburgMenu__bar {
          > span {
            background-color: #0f2137;
          }
        }
      }
    }
  }

  .food_delivery_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;
    .container {
      @media (min-width: 1551px) {
        max-width: 1430px;
      }
    }
    .mainMenuWrapper {
      flex: 1 1 100%;

      @media (max-width: 991px) {
        flex: 0 0 auto;
        margin-left: auto;
      }
    }
    .main_menu {
      margin-left: 45px;
      li {
        display: inline-block;
        padding-left: 13px;
        padding-right: 13px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: #00cc99;
          }
        }
        a {
          padding: 5px;
          transition: 0.15s ease-in-out;
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          color: #00334e;
          &:hover {
            color: #00cc99;
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button_two,
    .navbar_button {
      margin-left: auto;
      margin-right: 15px;
      .reusecore__button {
        border: none;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        padding: 0;
        display: flex;
        align-items: center;
        text-align: center;
        background-color: #fff2d9;
        border-radius: 5px;
        color: #00334e;
        padding: 0px 13.5px;
        height: 45px;
        transition: all 500ms ease;

        &:hover {
          background-color: #fff;
          color: #00334e;
          box-shadow: none;
        }
      }

      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button_two {
      margin-left: 0;
      margin-right: 0;
      .reusecore__button {
        margin-right: 0;
        background-color: #00334e;
        color: #fff;
        border-radius: 100px;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
          background-color: #0f2137;
        }
      }
    }
  }
`;
