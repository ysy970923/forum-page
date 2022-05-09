import React, { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import { portfolioTheme } from "common/theme/portfolio";
import ResetCSS from "common/assets/css/style";
import { GlobalStyle, ContentWrapper } from "containers/Forum/portfolio.style";

import Navbar from "containers/Forum/Navbar";
import ContentSection from "containers/Forum/PollInfo";
import ForumlistSection from "containers/Forum/Forumlist";
import ReplySection from "containers/Forum/Reply";
import Footer from "containers/Forum/Footer";
import InProgressPollsSection from "containers/Forum/InProgressPolls";

const ForumDetail = () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <Head>
          <title>Portfolio | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900"
            rel="stylesheet"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ContentSection />
          <InProgressPollsSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default ForumDetail;

// export async function getStaticProps({ params }) {
//   const pid = params.pid;
//   console.log(pid);
//   return {
//     props: {
//       pid: pid,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const pids = ["1", "2", "3"];
//   console.log(pids);
//   return {
//     paths: pids.map((pid) => {
//       return {
//         params: {
//           pid,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }
