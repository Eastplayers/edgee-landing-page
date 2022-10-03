import Image from "next/image";

import Title from "components/Title/Title";

import Logo from "public/icons/logo-white.svg";
import VectorTopLeft from "public/icons/vector-top-left.svg";
import VectorCenterLeft from "public/icons/vector-center-left.svg";
import VectorBottomLeft from "public/icons/vector-bottom-left.svg";

import IconOneLeft from "public/images/collab/icon-one-left.svg";
import IconTwoLeft from "public/images/collab/icon-two-left.svg";
import IconThreeLeft from "public/images/collab/icon-three-left.svg";
import IconOneRight from "public/images/collab/icon-one-right.svg";
import IconTwoRight from "public/images/collab/icon-two-right.svg";
import IconThreeRight from "public/images/collab/icon-three-right.svg";

import LogoOne from "public/images/collab/logos/logo-1.svg";
import LogoTwo from "public/images/collab/logos/logo-2.svg";
import LogoThree from "public/images/collab/logos/logo-3.svg";
import LogoFour from "public/images/collab/logos/logo-4.svg";
import LogoFive from "public/images/collab/logos/logo-5.svg";
import LogoSix from "public/images/collab/logos/logo-6.svg";
import LogoSeven from "public/images/collab/logos/logo-7.svg";
import LogoEight from "public/images/collab/logos/logo-8.svg";
import LogoNine from "public/images/collab/logos/logo-9.svg";
import LogoTen from "public/images/collab/logos/logo-10.svg";
import LogoEleven from "public/images/collab/logos/logo-11.svg";
import LogoTwelve from "public/images/collab/logos/logo-12.svg";
import LogoThirteen from "public/images/collab/logos/logo-13.svg";
import LogoFourteen from "public/images/collab/logos/logo-14.svg";
import LogoFifteen from "public/images/collab/logos/logo-15.svg";
import LogoSixteen from "public/images/collab/logos/logo-16.svg";
import LogoSeventeen from "public/images/collab/logos/logo-17.svg";
import LogoEighteen from "public/images/collab/logos/logo-18.svg";
import LogoNineteen from "public/images/collab/logos/logo-19.svg";
import LogoTwenty from "public/images/collab/logos/logo-20.svg";
import LogoTwentyOne from "public/images/collab/logos/logo-21.svg";
import LogoTwentyTwo from "public/images/collab/logos/logo-22.svg";

const OmnichannelSalesLogos = [LogoOne, LogoTwo, LogoThree, LogoFour, LogoFive];
const OtherManagementPlatformLogos = [LogoSix, LogoSeven, LogoEight, LogoNine];
const PaymentMethodsLogos = [LogoTen, LogoEleven, LogoTwelve];
const ShippingUnitLogos = [LogoThirteen, LogoFourteen, LogoFifteen];
const DataAnalysisLogos = [LogoSixteen, LogoSeventeen, LogoEighteen];
const MarketingChannelLogos = [
  LogoNineteen,
  LogoTwenty,
  LogoTwentyOne,
  LogoTwentyTwo,
];

import styles from "./CollabSection.module.scss";

const CollabSection = () => {
  return (
    <section className={styles.collab_container}>
      <div className="flex justify-center md:mb-10 mb-6">
        <Title mainTitle="Dễ dàng kết hợp với bên thứ 3" />
      </div>

      <div className={styles.diagram_wrapper}>
        <div className={styles.diagram_wrapper_container}>
          <div className={styles.diagram_wrapper_container_left}>
            <div className={styles.card_wrapper}>
              <div className={styles.card_wrapper_container}>
                <div className="flex items-center md:gap-2 gap-3 lg:order-1 order-2">
                  {OmnichannelSalesLogos.map((item) => (
                    <div className={styles.logo_icon}>
                      <Image src={item} alt="logo" />
                    </div>
                  ))}
                </div>
                <div className={styles.card}>
                  <Image src={IconOneLeft} />
                  <div className={styles.title}>Bán hàng đa kênh</div>
                </div>
              </div>
              <div className={styles.card_wrapper_container}>
                <div className="flex items-center md:gap-2 gap-3 lg:order-1 order-2">
                  {OtherManagementPlatformLogos.map((item) => (
                    <div className={styles.logo_icon}>
                      <Image src={item} alt="logo" />
                    </div>
                  ))}
                </div>
                <div className={styles.card}>
                  <Image src={IconTwoLeft} />
                  <div className={styles.title}>Nền tảng quản lí khác</div>
                </div>
              </div>
              <div className={styles.card_wrapper_container}>
                <div className="flex items-center md:gap-2 gap-3 lg:order-1 order-2">
                  {PaymentMethodsLogos.map((item) => (
                    <div className={styles.logo_icon}>
                      <Image src={item} alt="logo" />
                    </div>
                  ))}
                </div>
                <div className={styles.card}>
                  <Image src={IconThreeLeft} />
                  <div className={styles.title}>Phương thức thanh toán</div>
                </div>
              </div>
            </div>
            <div className={styles.line_container}>
              <Image src={VectorTopLeft} />
              <Image src={VectorCenterLeft} />
              <Image src={VectorBottomLeft} />
            </div>
          </div>

          <div className={styles.diagram_wrapper_container_right}>
            <div className={styles.line_container}>
              <div className="scale-x-[-1] pt-2">
                <Image src={VectorTopLeft} />
              </div>
              <Image src={VectorCenterLeft} />
              <div className="scale-x-[-1]">
                <Image src={VectorBottomLeft} />
              </div>
            </div>
            <div className={styles.card_wrapper}>
              <div className={styles.card_wrapper_container}>
                <div className={styles.card}>
                  <Image src={IconOneRight} />
                  <div className={styles.title}>Đơn vị vận chuyển</div>
                </div>
                <div className="flex items-center md:gap-2 gap-3">
                  {ShippingUnitLogos.map((item) => (
                    <div className={styles.logo_icon}>
                      <Image src={item} alt="logo" />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.card_wrapper_container}>
                <div className={styles.card}>
                  <Image src={IconTwoRight} />
                  <div className={styles.title}>Data Analytics</div>
                </div>
                <div className="flex items-center md:gap-2 gap-3">
                  {DataAnalysisLogos.map((item) => (
                    <div className={styles.logo_icon}>
                      <Image src={item} alt="logo" />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.card_wrapper_container}>
                <div className={styles.card}>
                  <Image src={IconThreeRight} />
                  <div className={styles.title}>Marketing channel</div>
                </div>
                <div className="flex items-center md:gap-2 gap-3">
                  {MarketingChannelLogos.map((item) => (
                    <div className={styles.logo_icon}>
                      <Image src={item} alt="logo" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.logo}>
            <Image src={Logo} alt="logo" />
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:mt-14 mt-6">
        <div className="lg:w-1/2 w-11/12 text-center">
          Đo lường chuyển đổi tự động từ Facebook, Google Analytics, Google Ads,
          TikTok,... Kết nối dữ liệu linh hoạt đa nền tảng tới Edgee.
        </div>
      </div>
    </section>
  );
};

export default CollabSection;
