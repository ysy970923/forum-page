import React from 'react';
import Link from 'next/link';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Box from 'common/components/Box';
import DownloadAppWrapper from './downloadApp.style';
import { DOWNLOAD_APP_DATA } from 'common/data/FoodDelivery';
const DownloadApp = () => {
  const { sectionImage, title, text, buttons } = DOWNLOAD_APP_DATA;
  return (
    <DownloadAppWrapper id="download">
      <Container>
        <Box className="image">
          <NextImage src={sectionImage} alt={title} />
        </Box>
        <Box className="content">
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
          <Box className="buttonWrap">
            {buttons.map(({ icon, text, title, link }, index) => (
              <Link href={link} key={`download-app-button-${index}`}>
                <a className="downloadAppBtn">
                  <img src={icon?.src} width="30" height="30" alt={title} />
                  <Box className="btnContent">
                    <Text as="span" content={text} />
                    <Text as="p" content={title} />
                  </Box>
                </a>
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </DownloadAppWrapper>
  );
};

export default DownloadApp;
