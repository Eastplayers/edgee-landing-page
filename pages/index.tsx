import type { NextPage } from "next";
import Head from "next/head";

import IntroSection from "components/sections/IntroSection/IntroSection";
import About from "components/sections/AboutSection/AboutSection";
import DifferenceSection from "components/sections/DifferenceSection/DifferenceSection";
import SolutionSection from "components/sections/SolutionSection/SolutionSection";
import CollabSection from "components/sections/CollabSection/CollabSection";
import AskingSection from "components/sections/AskingSection/AskingSection";
import CustomerTalkAboutSection from "components/sections/CustomerTalkAboutSection/CustomerTalkAboutSection";
import Footer from "components/Footer/Footer";

import styles from "styles/pages/Main.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Edgee - LandingPage</title>
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
