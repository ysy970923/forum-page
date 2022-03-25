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

const createHookMsg = (msg) =>
  Buffer.from(JSON.stringify(msg)).toString("base64");

const StakeTokensSection = ({
  sectionWrapper,
  description,
  inputFormBox,
  inputForm,
}) => {
  const connectedWallet = useConnectedWallet();
  const [nToken, setNToken] = React.useState("0");

  async function proceed() {
    const executeMsg = {
      send: {
        contract: "terra1sae4s4zlkc2r7d76dtv40ph3vz7p0zu9ysr9n6",
        amount: (nToken * 1000000).toString(),
        msg: {
          stake_voting_tokens: {},
        },
      },
    };

    if (!connectedWallet) {
      return;
    }

    if (connectedWallet.network.chainID.startsWith("columbus")) {
      alert(`Please only execute this example on Testnet`);
      return;
    }

    const terra = new createLCDClient({ network: connectedWallet.network });
    executeMsg.send.msg = createHookMsg(executeMsg.send.msg);

    const execute = new MsgExecuteContract(
      connectedWallet.terraAddress, // sender
      "terra1lzfrsy38l34uzrlma3fm3hsktv848pcgdnlcj7", // contract account address
      { ...executeMsg }, // handle msg
    );

    const executeTx = await connectedWallet.sign({
      msgs: [execute],
    });

    terra.tx.broadcastSync(executeTx.result).then((result) => {
      console.log(result);
    });
  }
  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter mobileGutter width="1200px">
        <TestimonialItem>
          <h1 style={{ textAlign: "center" }}>Stake Tokens</h1>
          <div {...description}>
            <p>Stake</p>
          </div>
          <div {...inputFormBox}>
            <input
              {...inputForm}
              value={nToken}
              onChange={(e) => setNToken(e.target.value)}
              placeholder="Stake"
            />
            <div>
              <p>ANC</p>
            </div>
          </div>
          <Button
            title={"Stake"}
            style={{
              borderRadius: "20px",
              textAlign: "center",
              width: "100%",
              marginTop: "45px",
            }}
            onClick={() => proceed()}
          />
        </TestimonialItem>
      </Container>
    </Box>
  );
};

StakeTokensSection.propTypes = {
  sectionWrapper: PropTypes.object,
  description: PropTypes.object,
  inputFormBox: PropTypes.object,
  inputForm: PropTypes.object,
};

StakeTokensSection.defaultProps = {
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

export default StakeTokensSection;
