import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Line } from "rc-progress";
import NextImage from "common/components/NextImage";
import { Icon } from "react-icons-kit";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import GlideCarousel from "common/components/GlideCarousel";
import GlideSlide from "common/components/GlideCarousel/glideSlide";

import { PrevButton, NextButton } from "../portfolio.style";
import { TestimonialWrapper, TestimonialItem } from "./testimonial.style";
import { ic_thumb_up } from "react-icons-kit/md/ic_thumb_up";
import {
  useConnectedWallet,
  createLCDClient,
} from "@terra-money/wallet-provider";

import {
  SkillDetails,
  SkillProgress,
  SuccessRate,
  ProgressBar,
  SkillIcon,
  SkillAbout,
} from "./skill.style";
import { SKILLICON } from "common/data/Portfolio/data";

const InProgressPollsSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  reviewStyle,
  nameStyle,
  designationStyle,
  col,
  skillTitle,
  skillDescription,
  skillSuccessRate,
  successRateText,
}) => {
  //Carousel Options
  const carouselOptions = {
    type: "carousel",
    autoplay: 6000,
    perView: 2,
    gap: 28,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 3,
      },
      767: {
        perView: 2,
      },
      500: {
        perView: 1,
      },
    },
  };

  const InProgressPolls = [
    {
      title: "Graphic Design",
      description:
        "Aristotle maintained the sharp distinction between science and the practical",
      quorumRate: "90",
    },
    {
      title: "Graphic Design",
      description:
        "Aristotle maintained the sharp distinction between science and the practical",
      quorumRate: "60",
    },
    {
      title: "Graphic Design",
      description:
        "Aristotle maintained the sharp distinction between science and the practical",
      quorumRate: "20",
    },
  ];

  const GOV_CONTRACT_ADDRESS = "terra1sae4s4zlkc2r7d76dtv40ph3vz7p0zu9ysr9n6";

  const connectedWallet = useConnectedWallet();
  if (connectedWallet) {
    const terra = new createLCDClient({ network: connectedWallet.network });
    const queryMsg = {
      polls: {
        filter: "in_progress",
      },
    };
    terra.wasm
      .contractQuery(GOV_CONTRACT_ADDRESS, { ...queryMsg })
      .then((result) => {
          result.quorumRate = (result.staked_amount ?? 0) / result.sta
          InProgressPolls.splice(0, 0, result)
        console.log(result);
      });
  }

  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Polls Inprogress" />
        </Box>
        <TestimonialWrapper>
          <GlideCarousel
            carouselSelector="testimonial-carousel"
            options={carouselOptions}
            prevButton={
              <PrevButton>
                <span />
              </PrevButton>
            }
            nextButton={
              <NextButton>
                <span />
              </NextButton>
            }
          >
            <>
              {InProgressPolls.map((item, index) => (
                <GlideSlide key={`testimonial-item-${index}`}>
                  <TestimonialItem>
                    <SkillDetails>
                      <SkillIcon>
                        <NextImage
                          src={SKILLICON}
                          alt={`skill-icon-${index + 1}`}
                        />
                      </SkillIcon>
                      <SkillAbout>
                        <Heading content={item.title} {...skillTitle} />
                        <Text
                          content={item.description}
                          {...skillDescription}
                        />
                      </SkillAbout>
                    </SkillDetails>
                    <SkillProgress>
                      <SuccessRate>
                        <Icon
                          icon={ic_thumb_up}
                          size={12}
                          className="skill_success_icon"
                        />
                        <Text
                          as="span"
                          content={`${item.successRate}% `}
                          {...skillSuccessRate}
                        />
                        <Text
                          as="span"
                          content="Quorum Rate"
                          {...skillSuccessRate}
                          {...successRateText}
                        />
                      </SuccessRate>
                      <ProgressBar>
                        <Line
                          percent={item.successRate}
                          strokeWidth="1.8"
                          trailWidth="1.8"
                          strokeColor="#3444f1"
                          trailColor="#e3e7f2"
                        />
                      </ProgressBar>
                    </SkillProgress>
                  </TestimonialItem>
                </GlideSlide>
              ))}
            </>
          </GlideCarousel>
        </TestimonialWrapper>
      </Container>
    </Box>
  );
};

InProgressPollsSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  reviewStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  col: PropTypes.object,
};

InProgressPollsSection.defaultProps = {
  sectionWrapper: {
    pt: ["60px", "80px", "100px", "110px", "150px"],
    pb: "50px",
  },
  secTitleWrapper: {
    mb: ["90px", "90px", "50px", "50px", "50px"],
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "700",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    width: "530px",
    maxWidth: "100%",
    mb: "0",
  },
  reviewStyle: {
    fontSize: "16px",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "30px",
  },
  nameStyle: {
    fontSize: "16px",
    color: "#302b4e",
    fontWeight: "600",
    mb: "7px",
  },
  designationStyle: {
    fontSize: "14px",
    color: "#43414e",
    mb: "0",
  },
  col: {
    width: [1, 1, 1 / 2],
    pl: ["15px", "15px", "15px", "25px", "25px"],
    pr: ["15px", "15px", "15px", "25px", "25px"],
    mb: ["30px", "30px", "30px", "50px", "50px"],
  },
  skillTitle: {
    fontSize: ["16px", "18px", "18px", "20px", "20px"],
    fontWeight: "600",
    color: "#302b4e",
    mb: "12px",
  },
  skillDescription: {
    fontSize: ["15px", "15px", "15px", "16px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0",
  },
  skillSuccessRate: {
    fontSize: ["15px", "15px", "14px", "15px", "16px"],
    fontWeight: "400",
    color: "#302b4e",
    lineHeight: "1.5",
    mb: "0",
  },
  successRateText: {
    ml: ".3em",
    display: ["none", "none", "none", "none", "inline-block"],
  },
};

export default InProgressPollsSection;