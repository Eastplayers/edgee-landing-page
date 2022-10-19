import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames";

import MobileHeader from "components/MobileHeader/MobileHeader";
import Button from "components/Button/Button";

import logoIcon from "public/images/logo.svg";
import MenuBar from "public/icons/menu-bar.svg";

import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState("");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleCheckIsSticky = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "sticky" : "";
      setIsSticky(direction);
    };

    window.addEventListener("scroll", handleCheckIsSticky);
    return () => {
      window.removeEventListener("scroll", handleCheckIsSticky);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const headerStyle = classNames(styles.header_wrapper_container, {
    [styles.header_sticky]: isSticky === "sticky",
  });

  const headerWrapperStyle = classNames(styles.header_wrapper, {
    [styles.header_wrapper_sticky]: isSticky === "sticky",
  });

  return (
    <>
      <div className={headerWrapperStyle}>
        <div className={headerStyle}>
          <div onClick={() => setOpen(true)} className="block lg:hidden">
            <Image src={MenuBar} alt="menuBar" width={30} height={30} />
          </div>
          <div className="flex flex-1 lg:justify-start justify-center">
            <div onClick={() => router.push("/")} className="cursor-pointer">
              <Image src={logoIcon} alt="logo" />
            </div>
          </div>
          <div className={styles.nav_links}>
            <div
              className={styles.link}
              onClick={() => router.push("/#about-section")}
            >
              Lợi ích
            </div>
            <div
              className={styles.link}
              onClick={() => router.push("/#solution-section")}
            >
              Giải pháp
            </div>
            <div
              className={styles.link}
              onClick={() => router.push("/#asking-section")}
            >
              Câu hỏi thường gặp
            </div>
          </div>
          <Button
            mainBtn={false}
            className="w-[160px] md:ml-11 ml-0 lg:block hidden"
            onClick={() => router.push("/#advise")}
          >
            Nhận tư vấn ngay
          </Button>
        </div>
      </div>
      <MobileHeader active={isOpen} close={() => setOpen(false)} />
    </>
  );
};
export default Header;
