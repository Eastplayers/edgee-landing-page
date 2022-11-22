import Image from "next/image";
import { motion } from "framer-motion";

import Button from "components/Button/Button";

import IntroImage from "public/images/intro-image.svg";
import IntroIcon from "public/icons/intro-icon.svg";

import styles from "./IntroSection.module.scss";

const IntroSection = () => {
  return (
    <div className={styles.intro_wrapper}>
      <div className={styles.intro_wrapper_container}>
        <div className="flex lg:flex-row flex-col justify-between gap-10">
          <div className="lg:w-[730px] w-full flex flex-col items-start justify-center gap-8">
            <div className={styles.main_title}>
              Hỗ trợ chuyển đổi số toàn diện. Gia tăng lợi thế cạnh tranh bền
              vững.
            </div>
            <Button className="md:w-max w-full text-white hover:text-black">
              <a href="#advise">Tư Vấn Miễn Phí</a>
            </Button>
          </div>
          <div className="relative">
            <Image src={IntroImage} alt="image" />
            <motion.div
              animate={{ y: [0, 30, 0] }}
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
