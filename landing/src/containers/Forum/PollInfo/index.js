import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Icon } from "react-icons-kit";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Image from "common/components/Image";
import Button from "common/components/Button";
import Container from "common/components/UI/Container";
import { getPollInfo, executeDAO } from "common/data/Forum";

import {
  MsgExecuteContract,
  SyncTxBroadcastResult,
} from "@terra-money/terra.js";
import {
  createLCDClient,
  CreateTxFailed,
  SignResult,
  Timeout,
  TxFailed,
  TxUnspecifiedError,
  useConnectedWallet,
  UserDenied,
} from "@terra-money/wallet-provider";

import { ButtonWrapper, TestimonialThumb, ContentWrapper } from "./style";

const ContentSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  inputFormBox,
  inputForm,
}) => {
  const connectedWallet = useConnectedWallet();
  const [blockHeight, setBlockHeight] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const [poll, setPoll] = React.useState();
  const router = useRouter();

  React.useEffect(() => {
    if (!router.isReady) return;
    const poll_id = router.query.pid;
    if (!connectedWallet) return;
    const terra = new createLCDClient({ network: connectedWallet.network });
    terra.tendermint
      .blockInfo()
      .then((blockinfo) => setBlockHeight(blockinfo.block.header.height));

    getPollInfo(connectedWallet, poll_id).then((poll) => {
      if (!poll) return;
      console.log(poll);
      setPoll(poll);
    });
  }, [connectedWallet, router.isReady, router.query]);

  async function cast_vote(yesNo) {
    const msg = {
      cast_vote: {
        poll_id: poll.id,
        vote: yesNo,
      },
    };
    return executeDAO(connectedWallet, msg);
  }

  async function end_poll() {
    const msg = {
      end_poll: {
        poll_id: poll.id,
      },
    };
    return executeDAO(connectedWallet, msg);
  }
  return (
    <ContentWrapper>
      {poll && (
        <Box {...sectionWrapper} as="section" id="process_section">
          <Container noGutter mobileGutter width="1200px">
            <div
              style={{
                boxShadow: "0.521px 2.954px 20px 0px rgba(101, 106, 160, 0.1)",
                padding: "15px",
                backgroundColor: "rgb(244, 244, 245)",
                borderRadius: "10px",
              }}
            >
              <Box {...secTitleWrapper}>
                <Heading {...secTitle} content={poll.title} />
              </Box>
              <section style={{ gap: "40px", display: "grid" }}>
                <article>
                  <h4>Poll Status</h4>
                  <p>
                    {blockHeight < poll.end_height ||
                    poll.status !== "in_progress"
                      ? poll.status
                      : "Waiting for End Poll"}
                  </p>
                </article>
                <article>
                  <h4>Creator</h4>
                  <p>{poll.creator}</p>
                </article>
                <article>
                  <h4>Amount</h4>
                  <p>{poll.staked_amount} ANC</p>
                </article>
                <article>
                  <h4>End Time</h4>
                  <p>{poll.end_time}</p>
                </article>
                <article>
                  <h4>Link</h4>
                  <p>-</p>
                </article>
                <article>
                  <h4>Description</h4>
                  <p>{poll.description}</p>
                </article>
              </section>
              <div>
                {blockHeight < poll.end_height && (
                  <div>
                    <Button
                      title={"Vote Agree"}
                      style={{
                        marginTop: "50px",
                        marginRight: "50px",
                        marginBottom: "50px",
                        backgroundColor: "green",
                      }}
                      onClick={() => cast_vote("yes")}
                    ></Button>
                    <Button
                      title={"Vote Disagree"}
                      style={{
                        marginTop: "50px",
                        backgroundColor: "red",
                        marginRight: "50px",
                        marginBottom: "50px",
                      }}
                      onClick={() => cast_vote("no")}
                    ></Button>
                    <Button
                      title={"Cancel Vote"}
                      style={{
                        marginTop: "50px",
                        backgroundColor: "orange",
                        marginBottom: "50px",
                      }}
                      onClick={() => proceed("no")}
                    ></Button>
                    <div {...inputFormBox}>
                      <input
                        {...inputForm}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Share Amount"
                      />
                      <div>
                        <p>ANC</p>
                      </div>
                    </div>
                  </div>
                )}
                {blockHeight > poll.end_height &&
                  poll.status === "in_progress" && (
                    <Button
                      title={"End Poll"}
                      style={{ marginTop: "50px", backgroundColor: "orange" }}
                      onClick={() => end_poll()}
                    ></Button>
                  )}
              </div>
            </div>
            <div
              style={{
                boxShadow: "0.521px 2.954px 20px 0px rgba(101, 106, 160, 0.1)",
                padding: "15px",
                backgroundColor: "rgb(244, 244, 245)",
                borderRadius: "10px",
                marginTop: "40px",
              }}
            >
              <div>
                <p>VOTE DETAILS</p>
              </div>
              <div class="progress">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    class="progress__bar__red"
                    style={{
                      width: (poll.no_ratio + poll.yes_ratio) * 100 + "%",
                    }}
                  ></div>
                  <div
                    class="progress__bar__green"
                    style={{
                      width: poll.yes_ratio * 100 + "%",
                    }}
                  ></div>
                  <div class="ref" data-ref="THRESHOLD"></div>
                </div>
              </div>
              <section
                style={{
                  gap: "40px",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gridTemplateRows: "repeat(3, auto)",
                  textAlign: "center",
                }}
              >
                <article
                  style={{ borderBottom: "1px solid rgb(226, 226, 229)" }}
                >
                  <p>VOTED</p>
                  <p>
                    {(100 *
                      (parseInt(poll.yes_votes) + parseInt(poll.no_votes))) /
                      Math.max(
                        poll.total_share_at_start_poll,
                        poll.total_share_at_end_poll
                      )}
                    %
                  </p>
                </article>
                <article
                  style={{ borderBottom: "1px solid rgb(226, 226, 229)" }}
                >
                  <p>YES</p>
                  <p>
                    {(100 * parseInt(poll.yes_votes)) /
                      Math.max(
                        poll.total_share_at_start_poll,
                        poll.total_share_at_end_poll
                      )}
                    %
                  </p>
                </article>
                <article>
                  <p>NO</p>
                  <p>
                    {(100 * parseInt(poll.no_votes)) /
                      Math.max(
                        poll.total_share_at_start_poll,
                        poll.total_share_at_end_poll
                      )}
                    %
                  </p>
                </article>
              </section>
            </div>
          </Container>
        </Box>
      )}
    </ContentWrapper>
  );
};

ContentSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  inputFormBox: PropTypes.object,
  inputForm: PropTypes.object,
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
  inputFormBox: {
    style: {
      borderRadius: "5px",
      boxShadow: "rgb(193 193 198) -1px -1px 2px, rgb(255 255 255) 1px 1px 2px",
      padding: "14px 20px",
      display: "inline-flex",
      alignItems: "center",
      width: "100%",
    },
  },
  inputForm: {
    style: {
      font: "inherit",
      color: "currentColor",
      width: "100%",
      border: 0,
      margin: 0,
      display: "block",
      padding: "6px 0 7px",
      minWidth: 0,
      background: "none",
      boxSizing: "content-box",
      animationName: "mui-auto-fill-cancel",
      letterSpacing: "inherit",
      animationDuration: "10ms",
    },
  },
};

export default ContentSection;
