import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Container from "common/components/UI/Container";

import { TestimonialItem } from "./testimonial.style";
import Button from "common/components/Button";
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
import {
  GOV_CONTRACT_ADDRESS,
  NFT_CONTRACT_ADDRESS,
  executeDAO,
} from "common/data/Forum";

const CreatePollSection = ({
  sectionWrapper,
  descriptionBox,
  inputFormBox,
  inputForm,
}) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [link, setLink] = React.useState("");

  const connectedWallet = useConnectedWallet();

  async function create_poll() {
    const msg = {
      create_poll: {
        title: title,
        description: description,
        link: link.length < 12 ? null : link,
      },
    };
    return executeDAO(connectedWallet, msg);
  }
  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter mobileGutter width="1200px">
        <TestimonialItem>
          <h1 style={{ textAlign: "center" }}>Create Poll</h1>
          <div {...descriptionBox}>
            <p>Title</p>
          </div>
          <div {...inputFormBox}>
            <input
              {...inputForm}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div {...descriptionBox}>
            <p>DescriptionBox</p>
          </div>
          <div {...inputFormBox}>
            <textarea
              {...inputForm}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              placeholder="Description"
            />
          </div>
          <div {...descriptionBox}>
            <p>Link</p>
          </div>
          <div {...inputFormBox}>
            <input
              {...inputForm}
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Link"
            />
            <div>
              <p>ANC</p>
            </div>
          </div>
          <Button
            title={"Submit"}
            style={{
              borderRadius: "20px",
              textAlign: "center",
              width: "100%",
              marginTop: "45px",
            }}
            onClick={create_poll}
          />
        </TestimonialItem>
      </Container>
    </Box>
  );
};

CreatePollSection.propTypes = {
  sectionWrapper: PropTypes.object,
  descriptionBox: PropTypes.object,
  inputFormBox: PropTypes.object,
  inputForm: PropTypes.object,
};

CreatePollSection.defaultProps = {
  sectionWrapper: {
    pt: ["60px", "80px", "100px", "110px", "150px"],
    pb: "50px",
  },
  descriptionBox: {
    style: { fontSize: "12px", marginTop: "20px" },
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

export default CreatePollSection;
