import React from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Box from 'common/components/Box';
import AvailableRestaurantsWrapper from './availableRestaurants.style';
import { AVAILABLE_RESTAURANTS_DATA } from 'common/data/FoodDelivery';
const AvailableRestaurants = () => {
  const { title, posts } = AVAILABLE_RESTAURANTS_DATA;
  return (
    <AvailableRestaurantsWrapper id="restaurants">
      <Container>
        <Heading as="h2" content={title} />
        <Box className="postWrap">
          {posts.map(({ image, title, link, categories }, index) => (
            <Box
              className="post"
              key={`available-restaurant-post-key-${index}`}
            >
              <NextImage src={image} alt={title} />
              <h3>
                <Link href={link}>
                  <a>{title}</a>
                </Link>
              </h3>
              <Box className="postMeta">
                {categories.map(({ name }, index) => (
                  <Link
                    href={link}
                    key={`available-restaurant-category-key-${index}`}
                  >
                    <a className="categoryItem">{name}</a>
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
        <Box className="text-center">
          <Link href="#">
            <a className="MoreButton">
              Discover More <Icon size={14} icon={arrowRight} />
            </a>
          </Link>
        </Box>
      </Container>
    </AvailableRestaurantsWrapper>
  );
};

export default AvailableRestaurants;
