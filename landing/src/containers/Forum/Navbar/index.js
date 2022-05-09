import React, { useContext } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import NavbarWrapper from "common/components/Navbar";
import Drawer from "common/components/Drawer";
import Button from "common/components/Button";
import Logo from "common/components/UIElements/Logo";
import Box from "common/components/Box";
import HamburgMenu from "common/components/HamburgMenu";
import Container from "common/components/UI/Container";
import { DrawerContext } from "common/contexts/DrawerContext";

import {
  useWallet,
  WalletStatus,
  useConnectedWallet,
  createLCDClient,
} from "@terra-money/wallet-provider";
import {
  GOV_CONTRACT_ADDRESS,
  NFT_CONTRACT_ADDRESS,
  getID,
  getBalance,
} from "common/data/Forum";

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);
  const wallet = useWallet();
  const [balance, setBalance] = React.useState("-");
  const connectedWallet = useConnectedWallet();
  getID(connectedWallet).then((id) => {
    getBalance(connectedWallet, id).then((balance) => {
      if (!balance) return;
      console.log(balance);
      setBalance((balance.share / 1000).toString());
    });
  });

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };
  return (
    <NavbarWrapper {...navbarStyle} className="portfolio_navbar">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <a class="color-font" href="/">
            <h4 style={{ fontWeight: "700", marginLeft: "8px" }}>LunaDAO</h4>
          </a>
          <Box {...menuWrapper}>
            <Link href="/my_page">
              <Button {...button} title={`Share: ${balance}`} />
            </Link>
            <Link href="/create_poll">
              <Button {...button} title="Create Poll" />
            </Link>
            <Link href="/members">
              <Button {...button} title="Members" />
            </Link>
            {wallet.status === WalletStatus.WALLET_NOT_CONNECTED && (
              <Button
                {...button}
                title="Connect Wallet"
                onClick={() => wallet.connect("EXTENSION")}
              />
            )}
            {wallet.status === WalletStatus.WALLET_CONNECTED && (
              <Button
                {...button}
                title={wallet.wallets[0].terraAddress.substring(0, 7) + "..."}
                onClick={() => wallet.disconnect()}
              />
            )}
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#3444f1" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <Link href="/create_poll">
                <Button {...button} title="Create Poll" />
              </Link>
              {/* {wallet.status === WalletStatus.WALLET_NOT_CONNECTED && (
                <Button
                  {...button}
                  title="Connect Wallet"
                  onClick={() => wallet.connect("EXTENSION")}
                />
              )}
              {wallet.status === WalletStatus.WALLET_CONNECTED && (
                <Button
                  {...button}
                  title={wallet.wallets[0].terraAddress}
                  onClick={() => wallet.disconnect()}
                />
              )} */}
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: "70px",
    display: "block",
  },
  row: {
    flexBox: true,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  logoStyle: {
    maxWidth: ["120px", "130px"],
  },
  button: {
    type: "button",
    fontSize: "16px",
    pl: "0",
    pr: "0",
    colors: "primary",
    minHeight: "auto",
  },
  menuWrapper: {
    flexBox: true,
    alignItems: "center",
  },
};

export default Navbar;
