import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Title from "components/Title/Title";

import IconTwo from "public/images/footer-icon-two.svg";
import IconThree from "public/images/icon-three.svg";
import Plus from "public/icons/plus.svg";
import Minus from "public/icons/minus.svg";

import styles from "./AskingSection.module.scss";

const askings = [
  {
    title:
      "Tôi được dùng thử dịch vụ trong vòng bao lâu? Nếu tôi muốn mua gói dịch vụ chính thức thì tôi phải làm gì?",
    content:
      "Việc tạo ra một hệ sinh thái đa kênh, bao gồm cả giải pháp social commerce và chatbot cho Facebook Messenger, không chỉ đem lại doanh số cao hơn mong đợi, mà còn giúp chúng tôi tạo nhiều cuộc trò chuyện hữu ích với người tiêu dùng. Điều này vô cùng giá trị cho kế hoạch chinh phục khách hàng mới của chúng tôi.",
  },
  {
    title:
      "Tôi được dùng thử dịch vụ trong vòng bao lâu? Nếu tôi muốn mua gói dịch vụ chính thức thì tôi phải làm gì?",
    content:
      "Việc tạo ra một hệ sinh thái đa kênh, bao gồm cả giải pháp social commerce và chatbot cho Facebook Messenger, không chỉ đem lại doanh số cao hơn mong đợi, mà còn giúp chúng tôi tạo nhiều cuộc trò chuyện hữu ích với người tiêu dùng. Điều này vô cùng giá trị cho kế hoạch chinh phục khách hàng mới của chúng tôi.",
  },
  {
    title:
      "Tôi được dùng thử dịch vụ trong vòng bao lâu? Nếu tôi muốn mua gói dịch vụ chính thức thì tôi phải làm gì?",
    content:
      "Việc tạo ra một hệ sinh thái đa kênh, bao gồm cả giải pháp social commerce và chatbot cho Facebook Messenger, không chỉ đem lại doanh số cao hơn mong đợi, mà còn giúp chúng tôi tạo nhiều cuộc trò chuyện hữu ích với người tiêu dùng. Điều này vô cùng giá trị cho kế hoạch chinh phục khách hàng mới của chúng tôi.",
  },
  {
    title:
      "Tôi được dùng thử dịch vụ trong vòng bao lâu? Nếu tôi muốn mua gói dịch vụ chính thức thì tôi phải làm gì?",
    content:
      "Việc tạo ra một hệ sinh thái đa kênh, bao gồm cả giải pháp social commerce và chatbot cho Facebook Messenger, không chỉ đem lại doanh số cao hơn mong đợi, mà còn giúp chúng tôi tạo nhiều cuộc trò chuyện hữu ích với người tiêu dùng. Điều này vô cùng giá trị cho kế hoạch chinh phục khách hàng mới của chúng tôi.",
  },
  {
    title:
      "Tôi được dùng thử dịch vụ trong vòng bao lâu? Nếu tôi muốn mua gói dịch vụ chính thức thì tôi phải làm gì?",
    content:
      "Việc tạo ra một hệ sinh thái đa kênh, bao gồm cả giải pháp social commerce và chatbot cho Facebook Messenger, không chỉ đem lại doanh số cao hơn mong đợi, mà còn giúp chúng tôi tạo nhiều cuộc trò chuyện hữu ích với người tiêu dùng. Điều này vô cùng giá trị cho kế hoạch chinh phục khách hàng mới của chúng tôi.",
  },
  {
    title:
      "Tôi được dùng thử dịch vụ trong vòng bao lâu? Nếu tôi muốn mua gói dịch vụ chính thức thì tôi phải làm gì?",
    content:
      "Việc tạo ra một hệ sinh thái đa kênh, bao gồm cả giải pháp social commerce và chatbot cho Facebook Messenger, không chỉ đem lại doanh số cao hơn mong đợi, mà còn giúp chúng tôi tạo nhiều cuộc trò chuyện hữu ích với người tiêu dùng. Điều này vô cùng giá trị cho kế hoạch chinh phục khách hàng mới của chúng tôi.",
  },
];

const AskingSection = () => {
  const [tabActive, setTabActive] = useState<string>("");

  return (
    <section className={styles.asking_wrapper}>
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
                  <div className={styles.title}>{item.title}</div>
                  <div
                    onClick={() => {
                      setTabActive(
                        tabActive === `tab_${index}` ? "" : `tab_${index}`
                      );
                    }}
                    className={styles.expand}
                  >
                    <Image src={tabActive === `tab_${index}` ? Minus : Plus} />
                  </div>
                </div>
                {tabActive === `tab_${index}` && (
                  <div className={styles.content}>{item.content}</div>
                )}
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
