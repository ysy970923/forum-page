import React from 'react';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Box from 'common/components/Box';
import GalleryWrapper from './gallery.style';
import { GALLERY_DATA } from 'common/data/FoodDelivery';
const Gallery = () => {
  const { title, text, images } = GALLERY_DATA;
  return (
    <GalleryWrapper>
      <Container>
        <Box className="galleryBox">
          {images.map(({ path }, index) => (
            <Box className="galleryItem" key={index}>
              <NextImage src={path} alt="gallery image" />
            </Box>
          ))}
        </Box>
        <Box className="content">
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
        </Box>
      </Container>
    </GalleryWrapper>
  );
};

export default Gallery;
