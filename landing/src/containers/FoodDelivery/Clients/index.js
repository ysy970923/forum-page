import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Box from 'common/components/Box';
import ClientsWrapper from './clients.style';
import { CLIENTS_DATA } from 'common/data/FoodDelivery';
const Clients = () => {
  const { title, images } = CLIENTS_DATA;
  return (
    <ClientsWrapper>
      <Container>
        <Heading as="h2" content={title} />
        <Box className="clientImages">
          {images.map(({ path }, index) => (
            <NextImage
              src={path}
              key={`clients-image-key-${index}`}
              alt="client image"
            />
          ))}
        </Box>
      </Container>
    </ClientsWrapper>
  );
};

export default Clients;
