import styled from "styled-components";

const ProcessItem = styled.div`
  position: relative;
`;

export const ContentWrapper = styled.div`
  .progress {
    margin: 50px auto;
    padding: 2px;
    width: 100%;
    border: 3px solid #05e35e;
    height: 30px;
    border-radius: 15px;
    box-sizeing: border-box;
  }

  .progress .ref {
    position: absolute;
    left: 20%;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: #888;
  }

  .progress .ref:before {
    content: attr(data-ref);
    position: absolute;
    width: 100px;
    left: -50px;
    top: 100%;
    color: #888;
    text-align: center;
    padding-top: 10px;
  }

  .progress .progress__bar__green {
    height: 100%;
    background-color: #05e35e;
    border-radius: 10px;
    animation: fill-bar-green 5s forwards;
    position: absolute;
    padding: inherit;
  }

  .progress .progress__bar__red {
    height: 100%;
    background-color: #e95979;
    border-radius: 10px;
    animation: fill-bar-red 5s forwards;
    position: absolute;
    padding: inherit;
  }
`;

export const TestimonialThumb = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: -5.818px 10.495px 50px 0px rgba(101, 106, 160, 0.43);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const ClientsImage = styled.div`
  margin-left: auto;
  margin-right: 0;
  padding: 20px 28px;
  &:hover {
    img {
      filter: grayscale(0);
      opacity: 1;
    }
  }

  img {
    filter: grayscale(1);
    opacity: 0.5;
    transition: 0.3s ease-in-out;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
`;

export default ProcessItem;
