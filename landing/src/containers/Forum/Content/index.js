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

import { CLIENTS } from "common/data/Portfolio/data";

import { ButtonWrapper, TestimonialThumb, ClientsImage } from "./style";
import {
  PROCESS_STEPS,
  SERVICE_LIST,
  IMG,
  HEART,
} from "common/data/Portfolio/data";
import Input from "common/components/Input";
const descriptionText =
  "I’m Tom Parkes, a New Zealand born digital designer currently looking for opportunities in Canada. Over the 8 years of my career, my portfolio includes user interface design, brand & identity design, illustration, and art & creative direction. While at Neverbland over the last few years, I've worked on web and product solutions for a range of startups, in a variety of industries.";

const ContentSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  processRow,
  processCol,
  processImageStyle,
  processTitleStyle,
  processDescriptionStyle,
  learningRow,
  learningContentArea,
  learningListArea,
  learningTitle,
  userName,
  learningSubTitle,
  learningDescription,
  buttonWrapper,
  buttonLabelStyle,
  buttonStyle,
  learningList,
  listItem,
  listText,
  listTitle,
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
            padding: "15px",
          }}
        >
          <Box {...secTitleWrapper}>
            <Heading {...secTitle} content="Let's Do this!" />
            <Text
              {...secDescription}
              content="description description description."
            />
          </Box>
          <div style={{ display: "flex", alignItems: "end" }}>
            <div>
              <TestimonialThumb>
                <Image src={IMG?.src} alt={`testimonial-avatar`} />
              </TestimonialThumb>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <Text {...userName} content="player_one" />
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
            <div
              style={{
                display: "flex",
                width: "100%"
              }}
            >
              <Button title="write comment" onClick={toggle} />
              <ClientsImage>
                <Image src={HEART?.src} alt="heart" title="heart" />
              </ClientsImage>
            </div>
          </Box>
          <div id="commentBox" style={{ display: showMe ? "block" : "none" }}>
            <Input
              inputType="textarea"
              rows="10"
              label="comment"
              iconPosition="right"
              isMaterial={true}
              className="email_input"
            />
            <Box {...buttonWrapper}>
              <ButtonWrapper>
                <Button
                  title="Comment"
                  className="portfolio_button"
                  onClick={toggle}
                  {...buttonStyle}
                />
              </ButtonWrapper>
            </Box>
          </div>
        </div>
      </Container>
    </Box>
  );
};

ContentSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  processRow: PropTypes.object,
  processCol: PropTypes.object,
  processImageStyle: PropTypes.object,
  processTitleStyle: PropTypes.object,
  processDescriptionStyle: PropTypes.object,
  learningRow: PropTypes.object,
  learningContentArea: PropTypes.object,
  learningListArea: PropTypes.object,
  learningTitle: PropTypes.object,
  userName: PropTypes.object,
  learningSubTitle: PropTypes.object,
  learningDescription: PropTypes.object,
  buttonWrapper: PropTypes.object,
  buttonLabelStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  learningList: PropTypes.object,
  listItem: PropTypes.object,
  listText: PropTypes.object,
  listTitle: PropTypes.object,
};

ContentSection.defaultProps = {
  sectionWrapper: {
    pt: ["60px", "80px", "90px", "100px", "140px"],
    pb: ["10px", "40px", "30px", "50px", "50px"],
  },
  secTitleWrapper: {
    mb: ["20px", "35px"],
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
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0",
    textAlign: "center",
  },
  processRow: {
    flexBox: true,
    flexWrap: "wrap",
    ml: ["0", "-15px", "-30px", "-70px", "-70px"],
    mr: ["0", "-15px", "-30px", "-70px", "-70px"],
  },
  processCol: {
    width: [1, 1 / 3],
    pl: ["0", "15px", "30px", "70px", "70px"],
    pr: ["0", "15px", "30px", "70px", "70px"],
    mb: "40px",
  },
  processImageStyle: {
    ml: "auto",
    mr: "auto",
    mb: "35px",
  },
  processTitleStyle: {
    fontSize: ["20px", "18px", "20px", "20px", "20px"],
    fontWeight: "600",
    color: "#302b4e",
    textAlign: "center",
    mb: ["20px", "20px", "27px", "27px", "27px"],
  },
  processDescriptionStyle: {
    fontSize: ["15px", "15px", "16px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    textAlign: "center",
    lineHeight: "1.5",
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
  userName: {
    fontSize: ["16px", "16px", "18px", "20px", "20px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
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
  buttonWrapper: {
    flexBox: true,
    alignItems: "center",
    mt: ["30px", "40px", "40px", "80px", "80px"],
    flexWrap: ["wrap"],
  },
  buttonLabelStyle: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#3444f1",
    mb: ["20px", "20px", "20px", "0", "0"],
    mr: "30px",
    width: ["100%", "100%", "100%", "auto", "auto"],
  },
  buttonStyle: {
    type: "button",
    fontSize: "16px",
    fontWeight: "500",
    color: "#fff",
    pl: "23px",
    pr: "23px",
  },
  learningListArea: {
    width: ["100%", "100%", "50%", "50%", "50%"],
    flexBox: true,
    flexWrap: "wrap",
  },
  learningList: {
    width: ["100%", "33.3333333%", "50%", "50%", "50%"],
    pl: ["0", "0", "35px", "35px", "35x"],
    pr: ["0", "30px", "0", "0", "0"],
    mb: ["40px", "40px", "60px", "80px", "90px"],
  },
  listTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#302b4e",
    mb: "25px",
  },
  listItem: {
    flexBox: true,
    alignItems: "center",
    color: "#43414e",
    mb: "16px",
  },
  listText: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#43414e",
    mb: "0",
    ml: "5px",
  },
};

export default ContentSection;
