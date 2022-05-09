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
  useConnectedWallet,
} from "@terra-money/wallet-provider";
import {
  GOV_CONTRACT_ADDRESS,
  NFT_CONTRACT_ADDRESS,
  getID,
  getBalance,
} from "common/data/Forum";

const MyPageSection = ({
  sectionWrapper,
  description,
  inputFormBox,
  inputForm,
}) => {
  const connectedWallet = useConnectedWallet();
  const [balance, setBalance] = React.useState({ balance: "", share: "" });
  const [id, setId] = React.useState("-");

  React.useEffect(() => {
    getID(connectedWallet).then((id) => {
      setId(id);
      getBalance(connectedWallet, id).then((balance) => {
        if (!balance) return;
        setBalance(balance);
      });
    });
  }, [connectedWallet]);

  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter mobileGutter width="1200px">
        <TestimonialItem>
          <h1 style={{ textAlign: "center" }}>My Page</h1>
          <section style={{ gap: "40px", display: "grid" }}>
            <article>
              <h4>ID</h4>
              <p>{id}</p>
            </article>
            <article>
              <h4>My Warrent Token</h4>
              <p>{balance.balance} ANC</p>
            </article>
            <article>
              <h4>My Share</h4>
              <p>{balance.share} ANC</p>
            </article>
          </section>
        </TestimonialItem>
      </Container>
    </Box>
  );
};

MyPageSection.propTypes = {
  sectionWrapper: PropTypes.object,
  description: PropTypes.object,
  inputFormBox: PropTypes.object,
  inputForm: PropTypes.object,
};

MyPageSection.defaultProps = {
  sectionWrapper: {
    pt: ["60px", "80px", "100px", "110px", "150px"],
    pb: "50px",
  },
  description: {
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

export default MyPageSection;
