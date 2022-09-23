import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { isEmpty } from "lodash";

import Title from "components/Title/Title";

import Salary from "public/icons/salary.svg";
import NumberOne from "public/icons/number-one.svg";
import Success from "public/icons/success.svg";
import ArrowUpRightMain from "public/icons/arrow-up-right-main.svg";

import styles from "./AboutSection.module.scss";

const AboutSection = () => {
  return (
    <section className={styles.about_container}>
      <div className="flex justify-center">
        <Title mainTitle="Tại sao nên lựa chọn Edgee mà không phải các nền tảng khác?" />
      </div>

      <div className="flex justify-between lg:flex-row flex-col gap-4">
        <div className={styles.about_card_container}>
          <Image src={Salary} alt="Salary" width={78} height={78} />
          <div className="flex flex-col gap-4">
            <div className={styles.title}>Prop-trade challenge</div>
            <div className={styles.sub_title}>
              Pass our prop-trade challenge without breaking any rule.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className={styles.title}>
              Get up to <span className={styles.highlight_text}>$100,000</span>{" "}
              funding
            </div>
            <div className={styles.sub_title}>
              Trade our company’s capital. Receive up to 90% of profits, we
              cover the losses.
            </div>
          </div>
          <div className={styles.highlight} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
