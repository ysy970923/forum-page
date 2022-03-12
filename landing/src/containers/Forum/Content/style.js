import styled from "styled-components";

const ProcessItem = styled.div`
  position: relative;
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
