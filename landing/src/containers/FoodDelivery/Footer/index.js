import React from 'react';
import Link from 'next/link';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Box from 'common/components/Box';
import Logo from 'common/components/UIElements/Logo';
import FooterWrapper from './footer.style';

import LogoImage from 'common/assets/image/foodDelivery/logo-dark.png';
import facebookIcon from 'common/assets/image/foodDelivery/footer-fb.svg';
import twitterIcon from 'common/assets/image/foodDelivery/footer-twitter.svg';
import dribbleIcon from 'common/assets/image/foodDelivery/footer-dribbble.svg';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Box className="leftText">
          <Logo
            href="#"
            className="logo"
            logoSrc={LogoImage}
            title="FoodDelivery"
          />
          <Box className="footerText">
            <Text
              as="span"
              content={`Copyright © ${new Date().getFullYear()}`}
            />{' '}
            <Link href="#">
              <a>RedQ, Inc.</a>
            </Link>
          </Box>
        </Box>
        <Box className="footerMenu">
          <Link href="#">
            <a>Support</a>
          </Link>
          <Link href="#">
            <a>About Us</a>
          </Link>
          <Link href="#">
            <a>Privacy</a>
          </Link>
          <Link href="#">
            <a>Contact</a>
          </Link>
        </Box>
        <Box className="socialLinks">
          <Text as="span" content="Social:" />
          <Link href="#">
            <a>
              <Image src={facebookIcon?.src} alt="facebook" />
            </a>
          </Link>
          <Link href="#">
            <a>
              <Image src={twitterIcon?.src} alt="twitter" />
            </a>
          </Link>
          <Link href="#">
            <a>
              <Image src={dribbleIcon?.src} alt="dribbble" />
            </a>
          </Link>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
