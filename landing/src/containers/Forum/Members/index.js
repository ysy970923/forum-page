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
import { getPollInfo, executeDAO, getMembersInfo } from "common/data/Forum";

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
import { TestimonialItem } from "./testimonial.style";

import { ButtonWrapper, TestimonialThumb, ContentWrapper } from "./style";

const MembersSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  inputFormBox,
  inputForm,
}) => {
  const connectedWallet = useConnectedWallet();
  const [blockHeight, setBlockHeight] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const [members, setMembers] = React.useState([]);
  const [poll, setPoll] = React.useState();

  React.useEffect(() => {
    getMembersInfo(connectedWallet).then((members) => {
      if (!members) return;
      console.log(members);
      setMembers(members);
    });
  }, [connectedWallet]);

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
      <Box {...sectionWrapper} as="section" id="process_section">
        <Container noGutter mobileGutter width="1200px">
          <TestimonialItem>
            <h1 style={{ textAlign: "center" }}>Members</h1>
            <section style={{ gap: "40px", display: "grid" }}>
              {members.map((member, index) => (
                <article>
                    <div style={{ width: "50%", float: "left" }}>
                      ID: {member.id} / Share: {member.share}
                    </div>
                    <div style={{ width: "50%", float: "right" }}>
                    <Button
                      title={"Delegate"}
                      style={{
                        backgroundColor: "green",
                      }}
                      onClick={() => cast_vote("yes")}
                    ></Button>
                    </div>
                </article>
              ))}
            </section>
          </TestimonialItem>
        </Container>
      </Box>
    </ContentWrapper>
  );
};

MembersSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  inputFormBox: PropTypes.object,
  inputForm: PropTypes.object,
};

MembersSection.defaultProps = {
  sectionWrapper: {
    pt: ["120px", "160px", "180px", "200px", "280px"],
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

export default MembersSection;
