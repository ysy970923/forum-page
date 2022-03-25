import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "react-icons-kit";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Image from "common/components/Image";
import Button from "common/components/Button";
import Container from "common/components/UI/Container";
import { plus } from "react-icons-kit/feather/plus";

import { ProcessItem, TestimonialThumb, ClientsImage } from "./style";
import {
  PROCESS_STEPS,
  SERVICE_LIST,
  IMG,
  HEART,
} from "common/data/Portfolio/data";

import Input from "common/components/Input";
import { PORTFOLIO_SHOWCASE } from "common/data/Portfolio/data";
const descriptionText = "I’m Tom Parkes, a New Zealand born.";

const ReplySection = ({
  sectionWrapper,
  learningRow,
  learningContentArea,
  learningListArea,
  learningTitle,
  learningSubTitle,
  learningDescription,
}) => {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <Box {...sectionWrapper} as="section" id="process_section">
      <Container noGutter mobileGutter width="1200px">
        <div
          style={{
            boxShadow: "0.521px 2.954px 20px 0px rgba(101, 106, 160, 0.1)",
          }}
        >
          {PORTFOLIO_SHOWCASE.map((item, index) => (
            <div
              style={{
                margin: "25px 20px 0px",
                padding: "15px",
                borderTop: "1px solid #383838",
              }}
              key={index}
            >
              <div style={{ display: "flex" }}>
                <div>
                  <TestimonialThumb>
                    <Image src={IMG?.src} alt={`testimonial-avatar`} />
                  </TestimonialThumb>
                </div>
                <div>
                  <Text content="player_one" />
                </div>
                <div style={{ marginRight: "10px", marginLeft: "auto" }}>
                  <Text content="22.04.17" />
                </div>
              </div>
              <Box {...learningRow}>
                <Box {...learningContentArea}>
                  <Text
                    content="We believe that we succeed when our clients succeed."
                    {...learningSubTitle}
                  />
                  <Text {...learningDescription} content={descriptionText} />
                </Box>
              </Box>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <ClientsImage>
                  <Image src={HEART?.src} alt="heart" title="heart" />
                </ClientsImage>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Box>
  );
};

ReplySection.propTypes = {
  sectionWrapper: PropTypes.object,
  learningRow: PropTypes.object,
  learningContentArea: PropTypes.object,
  learningListArea: PropTypes.object,
  learningTitle: PropTypes.object,
  learningSubTitle: PropTypes.object,
  learningDescription: PropTypes.object,
};

ReplySection.defaultProps = {
  sectionWrapper: {
    pt: ["30px", "40px", "45px", "50px", "70px"],
    pb: ["5px", "20px", "15px", "25px", "25px"],
  },
  learningRow: {
    flexBox: true,
    flexWrap: "wrap",
    mt: ["20px", "20px", "20px", "20px", "20px"],
  },
  learningContentArea: {
    width: ["100%", "100%", "100%", "100%", "100%"],
    pr: ["0px", "0px", "60px", "80px", "160px"],
    mb: ["70px", "70px", "0", "0", "0"],
  },
  learningTitle: {
    fontSize: ["22px", "22px", "24px", "30px", "30px"],
    fontWeight: "700",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["20px", "20px", "15px", "20px", "20px"],
    pr: ["0", "0", "0", "65px", "65px"],
  },
  learningSubTitle: {
    fontSize: ["16px", "16px", "18px", "20px", "20px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "20px",
    pr: ["0", "0", "0", "65px", "65px"],
  },
  learningDescription: {
    fontSize: "16px",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "25px",
  },
};

export default ReplySection;
