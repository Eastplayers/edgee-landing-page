import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import MobileHeader from "components/MobileHeader/MobileHeader";
import Button from "components/Button/Button";

import logoIcon from "public/images/logo.svg";
import MenuBar from "public/icons/menu-bar.svg";
// import User from "public/icons/user.svg";

import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <div className={styles.header_wrapper}>
        <div className={styles.header_wrapper_container}>
          <div onClick={() => setOpen(true)} className="block lg:hidden">
            <Image src={MenuBar} alt="menuBar" width={30} height={30} />
          </div>
          <div className="flex flex-1 lg:justify-start justify-center">
            <div onClick={() => router.push("/")} className="cursor-pointer">
              <Image src={logoIcon} alt="logo" />
            </div>
          </div>
          <div className={styles.nav_links}>
            <div className={styles.link}>Lợi ích</div>
            <div className={styles.link}>Giải pháp</div>
            <div className={styles.link}>Câu hỏi thường gặp</div>
          </div>
          <Button
            mainBtn={false}
            className="w-[140px] md:ml-11 ml-0 lg:block hidden"
            onClick={() => router.push("/#advise")}
          >
            Nhận tư vấn
          </Button>
        </div>
      </div>
      <MobileHeader active={isOpen} close={() => setOpen(false)} />
    </>
  );
};
export default Header;
