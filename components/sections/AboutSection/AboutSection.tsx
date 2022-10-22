import Image from "next/image";

import { data } from "./constant";
import Title from "components/Title/Title";

import IconQuote from "public/images/about/quote.svg";
import Human from "public/images/about/image.svg";

import styles from "./AboutSection.module.scss";

const AboutSection = () => {
  return (
    <section id="about-section" className={styles.about_container}>
      <div className="flex justify-center">
        <Title mainTitle="Tại sao nên lựa chọn nền tảng Edgee?" />
      </div>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-16">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
          {data.slice(0, 2).map((item) => {
            return (
              <div className={styles.about_card_container}>
                <Image src={item.image} alt="icon" />
                <div className="flex flex-col gap-3">
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.content}>{item.content}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
          {data.slice(-2).map((item) => {
            return (
              <div className={styles.about_card_container}>
                <Image src={item.image} alt="icon" />
                <div className="flex flex-col gap-3">
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.content}>{item.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.quote_container}>
        <div className="flex flex-col">
          <div className={styles.image_quote}>
            <Image src={IconQuote} alt="quote" />
          </div>
          <div className={styles.quote}>
            Đồng bộ từ chiến lược đến thực thi. Giúp doanh nghiệp tăng trưởng
            bền vững và đo lường được.
          </div>
        </div>
        <Image src={Human} alt="human" />
      </div>
    </section>
  );
};

export default AboutSection;
