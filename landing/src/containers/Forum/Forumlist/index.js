import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Image from "common/components/Image";
import Container from "common/components/UI/Container";
import List from "common/components/List";

import { PORTFOLIO_SHOWCASE } from "common/data/Portfolio/data";
import { ClientsImage, TestimonialItem, TestimonialThumb } from "./style";
import NextImage from "common/components/NextImage";

const ForumlistSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  row,
}) => {
  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Forum" />
          <Text {...secDescription} content="Any Thoughts are Welcome." />
        </Box>
        <TestimonialItem>
          <div style={{ flex: 4 }}>
            <Text as="h3" content={"Topic"} />
          </div>
          <div style={{ flex: 2 }}>
            <Text as="h3" content={""} />
          </div>
          <div style={{ flex: 1 }}>
            <Text as="h3" content={"Views"} />
          </div>
          <div style={{ flex: 1 }}>
            <Text as="h3" content={"Likes"} />
          </div>
        </TestimonialItem>

        {PORTFOLIO_SHOWCASE.map((item, index) => (
          <Link href="/forum_detail" key={index}>
            <TestimonialItem>
              <div style={{ flex: 4 }}>
                <Text as="h3" content={`${item.title}`} />
                <Box {...row}>
                  {item.buildWith.map((e, index) => (
                    <div
                      key={`testimonial-item-${index}`}
                      style={{ margin: "10px" }}
                    >
                      <Text as="h5" content={`${e.content}`} />
                    </div>
                  ))}
                </Box>
              </div>
              <div style={{ flex: 2 }}>
                <div style={{ display: "flex" }}>
                  <TestimonialThumb>
                    <Image src={item.image?.src} alt={`testimonial-avatar`} />
                  </TestimonialThumb>
                  <div>
                    <Text content="player_one" />
                  </div>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <Text as="h3" content={`${item.view}`} />
              </div>
              <div style={{ flex: 1 }}>
                <Text as="h3" content={`${item.love}`} />
              </div>
            </TestimonialItem>
          </Link>
        ))}
      </Container>
    </Box>
  );
};

ForumlistSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  row: PropTypes.object,
};

ForumlistSection.defaultProps = {
  sectionWrapper: {
    pt: ["40px", "60px", "80px", "80px", "80px"],
    pb: ["60px", "80px", "100px", "130px", "130px"],
  },
  secTitleWrapper: {
    mb: "60px",
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "700",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
    textAlign: "center",
  },
  secDescription: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0",
    textAlign: "center",
  },
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "left",
    justifyContent: "left",
  },
};

export default ForumlistSection;
