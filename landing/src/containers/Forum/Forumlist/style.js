import styled from 'styled-components';

export const ClientsImage = styled.div`
  position: relative;
  padding: 20px 28px;
  flex-shrink: 0;
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

export const TestimonialItem = styled.div`
  position: relative;
  background-color: rgb(244, 244, 245);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0.521px 2.954px 20px 0px rgba(101, 106, 160, 0.1);
  display: flex;
`;

export const TestimonialThumb = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: -5.818px 10.495px 50px 0px rgba(101, 106, 160, 0.43);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;