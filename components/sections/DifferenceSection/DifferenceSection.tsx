import Image from "next/image";
import classNames from "classnames";

import Title from "components/Title/Title";

// import LogoIcon from "public/icons/logo-gray.svg";

import Icon from "public/images/difference/icon.svg";
import Arrow from "public/icons/arrow.svg";
import StepOne from "public/images/difference/step-one.svg";
import StepTwo from "public/images/difference/step-two.svg";
import StepThree from "public/images/difference/step-three.svg";
import StepFour from "public/images/difference/step-four.svg";
import StepFive from "public/images/difference/step-five.svg";
import StepSix from "public/images/difference/step-six.svg";

import styles from "./DifferenceSection.module.scss";

const DifferenceSection = () => {
  return (
    <section id="difference-section" className={styles.difference_wrapper}>
      <div className={styles.difference_wrapper_container}>
        <div className="flex justify-center">
          <Title mainTitle="Dễ dàng sỡ hữu và phát triển kênh thương mại riêng biệt sau này" />
        </div>
        <div className="flex flex-col gap-16 mt-4">
          <div className="flex flex-col items-center gap-4">
            <div className={classNames(styles.title, styles.title_one)}>
              Sử dụng các nền tảng có sẵn khác xây kênh
            </div>

            <div className="flex items-center md:flex-row flex-col md:gap-0 gap-11 w-full justify-between">
              <div className="flex flex-col gap-1 items-center lg:w-60 w-full">
                <Image src={StepOne} alt="StepOne" />
                <div className={styles.content}>Xây dựng kênh online</div>
              </div>
              <div className="md:rotate-0 rotate-90 lg:w-[90px] md:w-1/2">
                <Image src={Arrow} alt="arrow" />
              </div>
              <div className="flex flex-col gap-1 items-center lg:w-60 w-full">
                <Image src={StepTwo} alt="StepOne" />
                <div className={styles.content}>
                  Kênh online đã xây dựng xong
                </div>
              </div>
              <div className="md:rotate-0 rotate-90 lg:w-[90px] md:w-1/2">
                <Image src={Arrow} alt="arrow" />
              </div>
              <div className="flex flex-col gap-1 items-center lg:w-60 w-full">
                <Image src={StepThree} alt="StepThree" />
                <div className={styles.content}>
                  Khó phát triển các tính năng riêng
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className={classNames(styles.title, styles.title_two)}>
              <div className="flex gap-2">
                <Image src={Icon} alt="icon" />
                <div>Sử dụng nền tảng Edgee xây kênh</div>
                <div className={styles.shine} />
              </div>
            </div>
            <div className="flex items-center md:flex-row flex-col md:gap-0 gap-11 w-full justify-between">
              <div className="flex flex-col gap-1 lg:w-60 w-full">
                <Image src={StepFour} alt="StepFour" />
                <div className={styles.content}>Xây dựng kênh online</div>
              </div>
              <div className="md:rotate-0 rotate-90 lg:w-[90px] md:w-1/2">
                <Image src={Arrow} alt="arrow" />
              </div>
              <div className="flex flex-col gap-1 lg:w-60 w-full">
                <Image src={StepFive} alt="StepFive" />
                <div className={styles.content}>
                  Kênh online đã xây dựng xong
                </div>
              </div>
              <div className="md:rotate-0 rotate-90 lg:w-[90px] md:w-1/2">
                <Image src={Arrow} alt="arrow" />
              </div>
              <div className="flex flex-col gap-1 lg:w-60 w-full">
                <Image src={StepSix} alt="StepSix" />
                <div className={styles.content}>
                  Hỗ trợ dễ dàng cho KH phát triển các tính năng riêng
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
