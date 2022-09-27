import { useContext } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Head from "next/head";
import { isEmpty } from "lodash";

import Button from "components/Button/Button";
import Footer from "components/Footer/Footer";
import IntroSection from "components/SectionUI/IntroSection/IntroSection";
import About from "components/SectionUI/AboutSection/AboutSection";
import DifferenceSection from "components/SectionUI/DifferenceSection/DifferenceSection";
import SolutionSection from "components/SectionUI/SolutionSection/SolutionSection";

import styles from "styles/pages/Main.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Edgee - Landing Page</title>
      </Head>
      <IntroSection />
      <div className={styles.home_page}>
        <About />
        <DifferenceSection />
        <SolutionSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
