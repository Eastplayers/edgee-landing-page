import Image from "next/image";

import Title from "components/Title/Title";

// import Salary from "public/icons/salary.svg";
// import NumberOne from "public/icons/number-one.svg";
// import Success from "public/icons/success.svg";
// import ArrowUpRightMain from "public/icons/arrow-up-right-main.svg";

import IconOne from "public/images/about/icon-one.svg";
import IconTwo from "public/images/about/icon-two.svg";
import IconThree from "public/images/about/icon-three.svg";
import IconFour from "public/images/about/icon-four.svg";
import IconQuote from "public/images/about/quote.svg";
import Human from "public/images/about/image.png";

import styles from "./AboutSection.module.scss";

const data = [
  {
    image: IconOne,
    title: "Bảo mật dữ liệu",
    content:
      "Với Edgee, các dữ liệu của công ty của bạn sẽ được quản lý chặt chẽ và an toàn hơn.",
  },
  {
    image: IconTwo,
    title: "Tính tùy chỉnh cao",
    content:
      "Xây dựng được tập khách hàng trung thành với doanh nghiệp và giữ chân được khách hàng với doanh nghiệp.",
  },
  {
    image: IconThree,
    title: "Tốc độ cải thiện giải pháp",
    content:
      "Cải tiến các giải pháp và nâng cấp cho doanh nghiệp với tốc độ số 1 thị trường.",
  },
  {
    image: IconFour,
    title: "Xây dựng nền tảng số riêng",
    content:
      "Khách hàng dễ dàng phát triển nền tảng với các tính năng riêng mà không bị phụ thuộc vào bên thứ ba",
  },
];

const AboutSection = () => {
  return (
    <section id="about-section" className={styles.about_container}>
      <div className="flex justify-center">
        <Title mainTitle="Tại sao nên lựa chọn Edgee mà không phải các nền tảng khác?" />
      </div>
      <div className="flex xl:flex-row flex-col justify-between gap-10">
        <div className="flex md:flex-row flex-col gap-10">
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
        <div className="flex md:flex-row flex-col gap-10">
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
