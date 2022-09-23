import Image from "next/image";
import { motion } from "framer-motion";

import Button from "components/Button/Button";

import IntroImage from "public/images/intro-image.png";
import IntroIcon from "public/icons/intro-icon.svg";

import styles from "./IntroSection.module.scss";

const IntroSection = () => {
  return (
    <div className={styles.intro_wrapper}>
      <div className={styles.intro_wrapper_container}>
        <div className="flex lg:flex-row flex-col justify-between gap-10">
          <div className="lg:w-[670px] w-full flex flex-col items-start justify-center gap-8">
            <div className={styles.main_title}>
              Sự cao cấp cho việc phát triển kênh thương mại điện tử
            </div>
            <Button className="md:w-max w-full text-white hover:text-black">
              Đăng kí nhận demo miễn phí
            </Button>
          </div>
          <div className="relative">
            <Image src={IntroImage} alt="image" />
            <motion.div
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className={styles.icon}
            >
              <Image src={IntroIcon} alt="coin" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
