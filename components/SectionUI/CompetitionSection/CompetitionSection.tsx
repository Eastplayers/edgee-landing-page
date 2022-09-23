import Image from "next/image";

import Title from "components/Title/Title";

import LogoIcon from "public/icons/logo-gray.svg";
import BannerImg from "public/images/banner-competition.png";

import styles from "./CompetitionSection.module.scss";

const CompetitionSection = () => {
  return (
    <section id="competition-rules" className={styles.competition_wrapper}>
      <div className={styles.competition_wrapper_container}>
        <div className={styles.left_content}>
          <div className={styles.img_container}>
            <Image
              src={require("public/images/competition-img.png")}
              alt="app-img"
              layout="responsive"
            />
            <div className={styles.logo}>
              <Image src={LogoIcon} alt="logo" />
            </div>
          </div>
        </div>
        <div className={styles.right_content}>
          <Title mainTitle="Competition Rules" />
          <div className={styles.right_content_container}>
            <div className={styles.step}>
              <div className={styles.number}>1</div>
              <div>
                All participants start with <span className={styles.highlight_white}>$100,000</span>{" "}
                virtual fund.
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.number}>2</div>
              <div>
                Entry to trading competition is{" "}
                <span className={styles.highlight_white}>free-of-charge.</span>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.number}>3</div>
              <div>
                <span className={styles.highlight_white}>$10,000</span> maximum drawdown.{" "}
                <span className={styles.highlight_orange}>
                  Participant shall be disqualified if the drawdown limit is broken.
                </span>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.number}>4</div>
              <div>Competition starts and ends each calendar month.</div>
            </div>
            <div className={styles.step}>
              <div className={styles.number}>5</div>
              <div>
                Grand prizes of{" "}
                <span className={styles.highlight_white}>$1,000, $500 and $200</span> for the top
                trading performers.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.banner_img}>
          <Image src={BannerImg} alt="BannerImg" />
        </div>
        <div className={styles.banner}>FREE TO PARTICIPATE</div>
      </div>
    </section>
  );
};

export default CompetitionSection;
