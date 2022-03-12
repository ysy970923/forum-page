import React from 'react';
import Box from 'common/components/Box';
import NextImage from 'common/components/NextImage';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import Carousel from './carousel';
import TestimonialsArea from './testimonials.style';
import { TESTIMONIALS_DATA } from 'common/data/FoodDelivery';
const Testimonials = () => {
  const { blockImage, title, posts } = TESTIMONIALS_DATA;
  return (
    <TestimonialsArea id="testimonials">
      <Container>
        <Box className="mainImage">
          <NextImage src={blockImage} alt={title} />
        </Box>
        <Box className="mainContent">
          <Heading as="h2" content={title} />
          <Carousel data={posts} />
        </Box>
      </Container>
    </TestimonialsArea>
  );
};

export default Testimonials;
