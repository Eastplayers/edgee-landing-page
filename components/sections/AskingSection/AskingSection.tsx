import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { askings } from "./constant";
import Title from "components/Title/Title";

import IconTwo from "public/images/footer-icon-two.svg";
import IconThree from "public/images/icon-three.svg";
import Plus from "public/icons/plus.svg";
import Minus from "public/icons/minus.svg";

import styles from "./AskingSection.module.scss";

const variants = {
  show: { opacity: 1, y: 0, display: "block" },
  hidden: { opacity: 0, y: "-50px", display: "none" },
};

const AskingSection = () => {
  const [tabActive, setTabActive] = useState<string>("");

  return (
    <section id="asking-section" className={styles.asking_wrapper}>
      <div className="flex justify-center md:mb-10 mb-6">
        <Title mainTitle="Câu hỏi thường gặp" />
      </div>
      <div className={styles.asking_wrapper_container}>
        <div className="flex items-center">
          <motion.div
            animate={{ y: [0, -120, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className={styles.icon_two}
          >
            <Image src={IconTwo} />
          </motion.div>
        </div>
        <div className="flex flex-col gap-6 flex-1">
          {askings.map((item, index) => {
            return (
              <div className={styles.card}>
                <div className={styles.header}>
                  <div
                    className={styles.title}
                    onClick={() => {
                      setTabActive(
                        tabActive === `tab_${index}` ? "" : `tab_${index}`
                      );
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    className={styles.expand}
                    onClick={() => {
                      setTabActive(
                        tabActive === `tab_${index}` ? "" : `tab_${index}`
                      );
                    }}
                  >
                    <Image src={tabActive === `tab_${index}` ? Minus : Plus} />
                  </div>
                </div>
                <motion.div
                  initial="hidden"
                  animate={tabActive === `tab_${index}` ? "show" : "hidden"}
                  variants={variants}
                  className={styles.content}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.content,
                    }}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
        <div className="flex items-start">
          <motion.div
            animate={{ y: [0, 120, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className={styles.icon_three}
          >
            <Image src={IconThree} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AskingSection;
