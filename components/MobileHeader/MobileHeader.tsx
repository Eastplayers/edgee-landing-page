import Image from "next/image";

import Button from "components/Button/Button";

import logoIcon from "public/images/logo.svg";
import Close from "public/icons/close.svg";

import styles from "./MobileHeader.module.scss";

interface Props {
  active: boolean;
  close(): void;
}

const MobileHeader = ({ active, close }: Props) => {
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
          <a
            href="#about"
            className={styles.link}
            onClick={() => {
              close();
            }}
          >
            Lợi ích
          </a>
          <a
            href="#solution"
            className={styles.link}
            onClick={() => {
              close();
            }}
          >
            Giải pháp
          </a>
          <a
            href="#faq"
            className={styles.link}
            onClick={() => {
              close();
            }}
          >
            Câu hỏi thường gặp
          </a>
          <div className="px-7">
            <a href="#advise">
              <Button
                mainBtn={false}
                className="lg:hidden block w-full"
                onClick={() => {
                  close();
                }}
              >
                Nhận tư vấn ngay
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
