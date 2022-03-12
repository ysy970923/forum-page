import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import Input from "common/components/Input";
import Container from "common/components/UI/Container";
import Radio from "common/components/Radio";
import RadioGroup from "common/components/RadioGroup";

import NewsletterWrapper, { ContactFormWrapper } from "./newsletter.style";

const ApplyForm = ({
  sectionWrapper,
  textArea,
  buttonArea,
  buttonStyle,
  title,
  description,
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="apply-form">
      <Container>
        <NewsletterWrapper>
          <Heading
            content="Join breaking the border to metaverse!"
            {...title}
          />
          <Text
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore"
            {...description}
          />
        </NewsletterWrapper>
        <NewsletterWrapper>
          <Box>
            <ContactFormWrapper>
              <Input
                inputType="text"
                label="Name"
                iconPosition="right"
                isMaterial={true}
                className="email_input"
              />
            </ContactFormWrapper>
            <ContactFormWrapper>
              <Input
                inputType="email"
                label="Email address"
                iconPosition="right"
                isMaterial={true}
                className="email_input"
              />
            </ContactFormWrapper>
            <ContactFormWrapper>
              <Input
                inputType="text"
                label="소속"
                iconPosition="right"
                isMaterial={true}
                className="email_input"
              />
            </ContactFormWrapper>
            <ContactFormWrapper>
              <Radio id="대학생" labelText="대학생" name="job" checked={true} />
              <Radio id="대학원생" labelText="대학원생" name="job" />
              <Radio id="그 외" labelText="그 외" name="job" />
            </ContactFormWrapper>
          </Box>
          <Box>
            <ContactFormWrapper>
              <Input
                inputType="textarea"
                rows="20"
                label="자기소개"
                iconPosition="right"
                isMaterial={true}
                className="email_input"
              />
            </ContactFormWrapper>
            <ContactFormWrapper>
              <Button {...buttonStyle} title="Apply" />
            </ContactFormWrapper>
          </Box>
        </NewsletterWrapper>
      </Container>
    </Box>
  );
};

ApplyForm.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
};

ApplyForm.defaultProps = {
  sectionWrapper: {},
  textArea: {
    mb: ["40px", "40px", "40px", "0", "0"],
    pr: ["0", "0", "0", "80px", "100px"],
  },
  title: {
    fontSize: ["18px", "20px", "22px", "24px", "26px"],
    fontWeight: "500",
    color: "#fff",
    lineHeight: "1.34",
    mb: ["14px", "14px", "14px", "14px", "13px"],
    textAlign: ["center", "center", "center", "left", "left"],
    letterSpacing: "-0.025em",
  },
  description: {
    fontSize: ["14px", "14px"],
    maxWidth: ["100%", "400px"],
    fontWeight: "400",
    color: "#fefefe",
    lineHeight: "1.7",
    mb: 0,
    textAlign: ["center", "center", "center", "left", "left"],
  },
  buttonArea: {
    zIndex: 1,
    width: ["100%", "auto"],
  },
  buttonStyle: {
    type: "button",
    fontSize: "14px",
    fontWeight: "700",
    pl: "30px",
    pr: "30px",
  },
};

export default ApplyForm;
