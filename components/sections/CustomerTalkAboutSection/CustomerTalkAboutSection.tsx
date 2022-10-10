import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";

import Title from "components/Title/Title";

import NextArrow from "public/images/next-arrow.svg";
import PrevArrow from "public/images/prev-arrow.svg";
import ImageOne from "public/images/slider-image-1.svg";
import Quote from "public/images/quote.svg";

import styles from "./CustomerTalkAboutSection.module.scss";

const sliderItems = [
  {
    image: ImageOne,
    content:
      " Việc tạo ra một hệ sinh thái đa kênh, bao gồm cả giải pháp social commerce và chatbot cho Facebook Messenger, không chỉ đem lại doanh số cao hơn mong đợi, mà còn giúp chúng tôi tạo nhiều cuộc trò chuyện hữu ích với người tiêu dùng. Điều này vô cùng giá trị cho kế hoạch chinh phục khách hàng mới của chúng tôi.",
    name: "Anh Nguyễn Hải Ninh",
    position: "CEO & Founder The Coffee House",
    highlight: "Forbes 30 Under 30 Vietnam",
  },
  {
    image: ImageOne,
    content:
      " Việc tạo ra một hệ sinh thái đa kênh, bao gồm cả giải pháp social commerce và chatbot cho Facebook Messenger, không chỉ đem lại doanh số cao hơn mong đợi, mà còn giúp chúng tôi tạo nhiều cuộc trò chuyện hữu ích với người tiêu dùng. Điều này vô cùng giá trị cho kế hoạch chinh phục khách hàng mới của chúng tôi.",
    name: "Anh Nguyễn Hải Ninh",
    position: "CEO & Founder The Coffee House",
    highlight: "Forbes 30 Under 30 Vietnam",
  },
  {
    image: ImageOne,
    content:
      " Việc tạo ra một hệ sinh thái đa kênh, bao gồm cả giải pháp social commerce và chatbot cho Facebook Messenger, không chỉ đem lại doanh số cao hơn mong đợi, mà còn giúp chúng tôi tạo nhiều cuộc trò chuyện hữu ích với người tiêu dùng. Điều này vô cùng giá trị cho kế hoạch chinh phục khách hàng mới của chúng tôi.",
    name: "Anh Nguyễn Hải Ninh",
    position: "CEO & Founder The Coffee House",
    highlight: "Forbes 30 Under 30 Vietnam",
  },
];

const CustomerTalkAboutSection = () => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    cssEase: "linear",
  };

  const handlePrevSlide = () => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextSlide = () => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className={styles.customer_talk_about_section_wrapper}>
      <div className={styles.customer_talk_about_section_wrapper_container}>
        <div className="flex justify-center">
          <Title mainTitle="Khách hàng nói gì về Edgee" />
        </div>
        <div className={styles.slider_wrapper}>
          <div className="relative">
            <div className={styles.navigate_slider}>
              <div className="cursor-pointer" onClick={handleNextSlide}>
                <Image src={NextArrow} alt="next" />
              </div>
              <div className="cursor-pointer" onClick={handlePrevSlide}>
                <Image src={PrevArrow} alt="next" />
              </div>
            </div>
            <Slider ref={sliderRef} {...settings}>
              {sliderItems.map((item) => {
                return (
                  <div className={styles.slide_card}>
                    <div className={styles.image}>
                      <Image src={item.image} alt="image" />
                    </div>
                    <div className={styles.content}>
                      <Image src={Quote} alt="quote" />
                      <div className={styles.text}>{item.content}</div>
                      <div className={styles.about}>
                        <div className={styles.about_name}>{item.name}</div>
                        <div className={styles.about_position}>
                          {item.position}
                        </div>
                        <div className={styles.about_highlight}>
                          {item.highlight}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTalkAboutSection;
