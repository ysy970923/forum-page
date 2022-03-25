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

import LogoImage from "common/assets/image/portfolio/logo-alt.png";
import LogoImageAlt from "common/assets/image/portfolio/logo-alt.png";
import {
  useWallet,
  WalletStatus,
  useConnectedWallet,
  createLCDClient,
} from "@terra-money/wallet-provider";

const GOV_CONTRACT_ADDRESS = "terra1sae4s4zlkc2r7d76dtv40ph3vz7p0zu9ysr9n6";

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);
  const wallet = useWallet();
  const [balance, setBalance] = React.useState("-");
  const connectedWallet = useConnectedWallet();
  if (connectedWallet) {
    const terra = new createLCDClient({ network: connectedWallet.network });
    const queryMsg1 = {
      staker: {
        address: connectedWallet.terraAddress.toString(),
      },
    };
    terra.wasm
      .contractQuery(GOV_CONTRACT_ADDRESS, { ...queryMsg1 })
      .then((result) => {
        setBalance((result.balance / 1000000).toString());
      });
    const queryMsg2 = {
      state: {},
    };
    terra.wasm
      .contractQuery(GOV_CONTRACT_ADDRESS, { ...queryMsg2 })
      .then((result) => {
        console.log(result);
      });
  }

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
          <Logo
            href="/"
            logoSrc={LogoImage}
            title="Portfolio"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="/"
            logoSrc={LogoImageAlt}
            title="Portfolio"
            logoStyle={logoStyle}
            className="logo-alt"
          />
          <Box {...menuWrapper}>
            <Link href="/stake_tokens">
              <Button {...button} title={`Staked: ${balance}`} />
            </Link>
            <Link href="/create_poll">
              <Button {...button} title="Create Poll" />
            </Link>
            <Link href="/write_forum">
              <Button {...button} title="Write Forum" />
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
                title={wallet.wallets[0].terraAddress.substring(0, 7) + '...'}
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
