import type { NextPage } from "next";
import Head from "next/head";

import IntroSection from "components/sections/IntroSection";
import About from "components/sections/AboutSection";
import DifferenceSection from "components/sections/DifferenceSection";
import SolutionSection from "components/sections/SolutionSection";
import CollabSection from "components/sections/CollabSection";
import AskingSection from "components/sections/AskingSection";
import CustomerTalkAboutSection from "components/sections/CustomerTalkAboutSection";
import Footer from "components/Footer/Footer";

import styles from "styles/pages/Main.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Edgee - Nền tảng chuyển đổi số toàn diện</title>
      </Head>
      <IntroSection />
      <div className={styles.home_page}>
        <About />
        <DifferenceSection />
        <SolutionSection />
        <CollabSection />
        <CustomerTalkAboutSection />
        <AskingSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
