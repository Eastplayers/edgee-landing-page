import type { NextPage } from "next";
import Head from "next/head";

import IntroSection from "components/SectionUI/IntroSection/IntroSection";
import About from "components/SectionUI/AboutSection/AboutSection";
import DifferenceSection from "components/SectionUI/DifferenceSection/DifferenceSection";
import SolutionSection from "components/SectionUI/SolutionSection/SolutionSection";
import CollabSection from "components/SectionUI/CollabSection/CollabSection";
import AskingSection from "components/SectionUI/AskingSection/AskingSection";
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
        <AskingSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
