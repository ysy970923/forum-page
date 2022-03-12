import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Box from 'common/components/Box';
import ProductDeliveryWrapper from './productDelivery.style';
import { DELIVERY_PRODUCT_DATA } from 'common/data/FoodDelivery';
const ProductDelivery = () => {
  const { sectionContent, posts } = DELIVERY_PRODUCT_DATA;
  const { title, text, image } = sectionContent;
  return (
    <ProductDeliveryWrapper>
      <Container>
        <Box className="image">
          <Fade left>
            <NextImage src={image} alt={title} />
          </Fade>
        </Box>
        <Box className="content">
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
          <Box className="postWrap">
            {posts.map(({ title, text }, index) => (
              <Box className="post" key={`product-delivery-post-key-${index}`}>
                <Box>
                  <Heading as="h3" content={title} />
                  <Text as="p" content={text} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </ProductDeliveryWrapper>
  );
};

export default ProductDelivery;
