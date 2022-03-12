import React from 'react';
import Link from 'next/link';
import Heading from 'common/components/Heading';
import Box from 'common/components/Box';
import Container from 'common/components/UI/Container';
import PopularCategoryWrapper from './popularCategory.style';
import { PRODUCT_CATEGORY } from 'common/data/FoodDelivery';

const PopularCategory = () => {
  const { title, list } = PRODUCT_CATEGORY;
  return (
    <PopularCategoryWrapper id="categories">
      <Container>
        <Heading as="h2" content={title} />
        <Box className="categoryList">
          {list.map(({ label, link }, index) => (
            <Link href={link} key={`list-key-${index}`}>
              <a className="categoryItem">{label}</a>
            </Link>
          ))}
        </Box>
      </Container>
    </PopularCategoryWrapper>
  );
};

export default PopularCategory;
