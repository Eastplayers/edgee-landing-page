import Image from "next/image";
import classNames from "classnames";

import Title from "components/Title/Title";

import StepOne from "public/images/difference/step-one.svg";
import StepTwo from "public/images/difference/step-two.svg";
import StepThree from "public/images/difference/step-three.svg";
import StepFour from "public/images/difference/step-four.svg";
import StepFive from "public/images/difference/step-five.svg";
import StepSix from "public/images/difference/step-six.svg";
import Arrow from "public/icons/arrow.svg";
import Icon from "public/images/difference/icon.svg";

import styles from "./DifferenceSection.module.scss";

const DifferenceSection = () => {
  return (
    <section id="difference-section" className={styles.difference_wrapper}>
      <div className={styles.difference_wrapper_container}>
        <div className="flex justify-center">
          <Title mainTitle="Nền tảng bán hàng có thể tuỳ chỉnh tối đa phù hợp với nhu cầu của doanh nghiệp" />
        </div>
        <div className="flex flex-col gap-16 mt-4">
          <div className="flex flex-col items-center gap-4">
            <div className={classNames(styles.title, styles.title_one)}>
              <div className={styles.content_title}>Trước khi có Edgee</div>
            </div>
            <div className="flex items-center md:flex-row flex-col md:gap-0 gap-11 w-full justify-between">
              <div className="flex flex-col gap-1 items-center lg:w-60 w-full">
                <Image src={StepOne} alt="StepOne" />
                <div className={styles.content}>
                  Mất công sức và thời gian để nghiên cứu vô số hệ thống có sẵn
                  trên thị trường
                </div>
              </div>
              <div className="md:rotate-0 rotate-90 lg:w-[90px] md:w-1/2">
                <Image src={Arrow} alt="arrow" />
              </div>
              <div className="flex flex-col gap-1 items-center lg:w-60 w-full">
                <Image src={StepTwo} alt="StepOne" />
                <div className={styles.content}>
                  Mất nhiều thời gian training nhân viên & thay đổi quy trình
                  làm việc để phù hợp với hệ thống
                </div>
              </div>
              <div className="md:rotate-0 rotate-90 lg:w-[90px] md:w-1/2">
                <Image src={Arrow} alt="arrow" />
              </div>
              <div className="flex flex-col gap-1 items-center lg:w-60 w-full">
                <Image src={StepThree} alt="StepThree" />
                <div className={styles.content}>
                  Hệ thống không còn phù hợp khi scale doanh nghiệp
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className={classNames(styles.title, styles.title_two)}>
              <div className="flex gap-2">
                <Image src={Icon} alt="icon" />
                <div className={styles.content_title}>
                  Sử dụng nền tảng Edgee
                </div>
              </div>
            </div>
            <div className="flex items-center md:flex-row flex-col md:gap-0 gap-11 w-full justify-between">
              <div className="flex flex-col gap-1 lg:w-60 w-full">
                <Image src={StepFour} alt="StepFour" />
                <div className={styles.content}>
                  Được tư vấn xây dựng giải pháp từ đội ngũ giàu kinh nghiệm từ
                  Edgee
                </div>
              </div>
              <div className="md:rotate-0 rotate-90 lg:w-[90px] md:w-1/2">
                <Image src={Arrow} alt="arrow" />
              </div>
              <div className="flex flex-col gap-1 lg:w-60 w-full">
                <Image src={StepFive} alt="StepFive" />
                <div className={styles.content}>
                  Đội ngũ Edgee triển khai các giải pháp phù hợp nhất với doanh
                  nghiệp của bạn
                </div>
              </div>
              <div className="md:rotate-0 rotate-90 lg:w-[90px] md:w-1/2">
                <Image src={Arrow} alt="arrow" />
              </div>
              <div className="flex flex-col gap-1 lg:w-60 w-full">
                <Image src={StepSix} alt="StepSix" />
                <div className={styles.content}>
                  Đội ngũ Edgee phát triển thêm nhiều tính năng cần thiết khi
                  doanh nghiệp scale
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
