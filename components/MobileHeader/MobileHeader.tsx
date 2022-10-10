import Image from "next/image";
import { useRouter } from "next/router";

import Button from "components/Button/Button";

import logoIcon from "public/images/logo.svg";
import Close from "public/icons/close.svg";
// import Facebook from "public/icons/facebook.svg";
// import Discord from "public/icons/discord.svg";
// import Twitter from "public/icons/twitter.svg";
// import Telegram from "public/icons/telegram.svg";
// import LinkedIn from "public/icons/linkedIn.svg";
// import ArrowUpRightWhite from "public/icons/arrow-up-right-white.svg";
// import Visa from "public/icons/logo_visa.svg";
// import MasterCard from "public/icons/logo_masterCard.svg";
// import PCJ from "public/icons/logo_pcj.svg";

import styles from "./MobileHeader.module.scss";

interface Props {
  active: boolean;
  close(): void;
}

const MobileHeader = ({ active, close }: Props) => {
  const router = useRouter();

  return (
    <div
      className={`${styles.mobile_header_container} ${
        active ? styles.show : ""
      }`}
    >
      <div className={styles.header}>
        <div className="absolute top-5 right-6" onClick={close}>
          <Image src={Close} alt="menuBar" width={35} height={35} />
        </div>
        <div className="flex justify-center">
          <Image src={logoIcon} alt="logo" />
        </div>
      </div>
      <div className="mt-2 px-4 flex flex-col justify-between h-[90%]">
        <div className={styles.nav_links}>
          <div
            className={styles.link}
            onClick={() => {
              router.push("/#about-section");
              close();
            }}
          >
            Lợi ích
          </div>
          <div
            className={styles.link}
            onClick={() => {
              router.push("/#solution-section");
              close();
            }}
          >
            Giải pháp
          </div>
          <div
            className={styles.link}
            onClick={() => {
              router.push("/#asking-section");
              close();
            }}
          >
            Câu hỏi thường gặp
          </div>
          <div className="px-7">
            <Button
              mainBtn={false}
              className="lg:hidden block w-full"
              onClick={() => {
                router.push("/#advise");
                close();
              }}
            >
              Nhận tư vấn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
