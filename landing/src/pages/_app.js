import { Modal } from "@redq/reuse-modal";
import "@redq/reuse-modal/es/index.css";
import "common/assets/css/flaticon.css";
import "../containers/CryptoModern/CountDown/timer.css";
import "common/assets/css/icon-example-page.css";
// swiper bundle styles
import "swiper/css/bundle";
import "common/assets/css/react-slick.css";
import "common/assets/css/rc-collapse.css";
import "rc-collapse/assets/index.css";
import {
  getChainOptions,
  StaticWalletProvider,
  WalletControllerChainOptions,
  WalletProvider,
} from "@terra-money/wallet-provider";

export default function CustomApp({ Component, pageProps }) {
  return typeof window !== "undefined" ? (
    <WalletProvider>
      <Modal>
        <Component {...pageProps} />
      </Modal>
    </WalletProvider>
  ) : (
    <StaticWalletProvider>
      <Modal>
        <Component {...pageProps} />
      </Modal>
    </StaticWalletProvider>
  );
}

CustomApp.getInitialProps = async () => {
  const chainOptions = await getChainOptions();
  return {
    ...chainOptions,
  };
};
