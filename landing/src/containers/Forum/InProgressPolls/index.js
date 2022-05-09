import React, { useEffect } from "react";
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
import {
  GOV_CONTRACT_ADDRESS,
  TOKEN_CONTRACT_ADDRESS,
} from "common/data/Forum";
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

const InProgressPollsSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  skillTitle,
  skillDescription,
  skillSuccessRate,
  successRateText,
}) => {
  const connectedWallet = useConnectedWallet();
  const [inProgressPolls, setInProgressPolls] = React.useState([]);
  const [blockHeight, setBlockHeight] = React.useState(0);

  useEffect(() => {
    if (connectedWallet) {
      const terra = new createLCDClient({ network: connectedWallet.network });
      const queryMsg = {
        polls: {
          //   filter: "in_progress",
        },
      };
      terra.tendermint.blockInfo().then((blockinfo) => {
        setBlockHeight(blockinfo.block.last_commit.height);
      });
      terra.wasm
        .contractQuery(GOV_CONTRACT_ADDRESS, { ...queryMsg })
        .then((result) => {
          for (const i in result.polls) {
            const poll = result.polls[i];
            poll.quorumRate = (
              (100 * poll.yes_votes) /
              ((poll.yes_votes + poll.no_votes + 10) ^ -7)
            ).toFixed(0);
          }
          setInProgressPolls(result.polls);
        });
    }
  }, [connectedWallet]);

  //Carousel Options
  const carouselOptions = {
    type: "carousel",
    autoplay: 6000,
    perView: 2,
    gap: 28,
    animationDuration: 800,
    breakpoints: {
      767: {
        perView: 2,
      },
      500: {
        perView: 1,
      },
    },
  };

  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Polls" />
        </Box>
        <TestimonialWrapper>
          {inProgressPolls.length !== 0 && (
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
                {inProgressPolls.map((item, index) => (
                  <GlideSlide key={`testimonial-item-${index}`}>
                    <Link
                      href={{
                        pathname: "/poll_detail/" + item.id,
                      }}
                    >
                      <a>
                        <p>
                          {blockHeight < item.end_height ||
                          item.status !== "in_progress"
                            ? item.status
                            : "Waiting for End Poll"}
                        </p>
                        <TestimonialItem>
                          <SkillDetails>
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
                                content={
                                  (
                                    (100 *
                                      (parseInt(item.yes_votes) +
                                        parseInt(item.no_votes))) /
                                    Math.max(
                                      item.total_share_at_start_poll,
                                      item.total_share_at_end_poll
                                    )
                                  ).toFixed(2) + "%"
                                }
                                {...skillSuccessRate}
                              />
                            </SuccessRate>
                            <ProgressBar>
                              <Line
                                percent={
                                  (100 *
                                    (parseInt(item.yes_votes) +
                                      parseInt(item.no_votes))) /
                                  Math.max(
                                    item.total_share_at_start_poll,
                                    item.total_share_at_end_poll
                                  )
                                }
                                strokeWidth="1.8"
                                trailWidth="1.8"
                                strokeColor="#3444f1"
                                trailColor="#e3e7f2"
                              />
                            </ProgressBar>
                          </SkillProgress>
                        </TestimonialItem>
                      </a>
                    </Link>
                  </GlideSlide>
                ))}
              </>
            </GlideCarousel>
          )}
        </TestimonialWrapper>
      </Container>
    </Box>
  );
};

InProgressPollsSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
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
