import React from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Box from 'common/components/Box';

import CallToActionWrapper from './callToAction.style';

import { CALL_TO_ACTION_DATA } from 'common/data/FoodDelivery';

const CallToAction = () => {
  const { title, text, link, image } = CALL_TO_ACTION_DATA;
  return (
    <CallToActionWrapper id="order">
      <Container>
        <Image
          src={image?.src}
          className="sectionImage"
          alt="call to action image"
        />
        <Box className="content">
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
          <Link href={link.path}>
            <a className="callButton">
              {link.label} <Icon size={14} icon={arrowRight} />
            </a>
          </Link>
        </Box>
      </Container>
    </CallToActionWrapper>
  );
};

export default CallToAction;
