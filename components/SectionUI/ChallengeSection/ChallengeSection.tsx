import Image from "next/image";

import Title from "components/Title/Title";

import LogoIcon from "public/icons/logo-gray.svg";

import styles from "./ChallengeSection.module.scss";

const ChallengeSection = () => {
  return (
    <section id="challenge-rules" className={styles.challenge_wrapper}>
      <div className={styles.challenge_wrapper_container}>
        <div className={styles.left_content}>
          <Title mainTitle="Challenge Rules" />
          <div className={styles.left_content_container}>
            <div className={styles.step}>
              <div className={styles.number}>1</div>
              <div>
                Challengers start with{" "}
                <span className={styles.highlight_white}>$25,000/$50,000/$100,000</span> virtual
                fund package.
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.number}>2</div>
              <div>There is no time limit.</div>
            </div>
            <div className={styles.step}>
              <div className={styles.number}>3</div>
              <div>
                <span className={styles.highlight_white}>20%</span> total profits target
                ($5,000/$10,000/$20,000). Best day below{" "}
                <span className={styles.highlight_white}>10%</span> of total profits made. Best
                trade below <span className={styles.highlight_white}>10%</span> of total profits
                made.
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.number}>4</div>
              <div>
                <span className={styles.highlight_white}>4%</span> maximum drawdown
                ($1,000/$2,000/$4,000).{" "}
                <span className={styles.highlight_orange}>
                  Challenge shall be reset if the drawdown limit is broken.
                </span>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.number}>5</div>
              <div>
                Minimum <span className={styles.highlight_white}>20 days (480 hours)</span> with
                open positions.
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.number}>6</div>
              <div>
                Qualified traders shall be funded up to{" "}
                <span className={styles.highlight_white}>$100,000</span> in real trading power.
                Trade responsibly and consistently and receive up to{" "}
                <span className={styles.highlight_white}>90%</span> of your profits.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_content}>
          <div className={styles.img_container}>
            <Image
              src={require("public/images/challenge-img.png")}
              alt="app-img"
              layout="responsive"
            />
            <div className={styles.logo}>
              <Image src={LogoIcon} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
