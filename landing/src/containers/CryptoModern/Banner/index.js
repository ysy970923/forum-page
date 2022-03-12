import React from "react";
import Fade from "react-reveal/Fade";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import BannerWrapper, {
  BannerContent,
  DiscountLabel,
  BannerImage,
  ButtonGroup,
} from "./banner.style";

import bannerImg from "common/assets/image/cryptoModern/banner-bg.png";

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          {/* <Fade up>
            <DiscountLabel>
              <Text className="discountAmount" content="25% Discount" />
              <Text
                className="discountText"
                content="on every first project "
              />
            </DiscountLabel>
          </Fade> */}
          <Fade up delay={100}>
            <Heading as="h1" content="Metaverse의 경계를 허물다" />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna
          ipsum dolor sit amet consectetur."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <AnchorLink href="#apply-form">
                <Button className="primary" title="지원하기" />
              </AnchorLink>
              {/* <Button
                className="text"
                variant="textButton"
                title="WHITE PAPER"
              /> */}
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <NextImage src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
