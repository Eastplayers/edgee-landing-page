import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Overlay from "components/Overlay/Overlay";

import Close from "public/icons/close.svg";
import Success from "public/icons/success-icon.svg";
import Fail from "public/icons/fail-icon.svg";

import styles from "./Modal.module.scss";
import Button from "components/Button/Button";

interface Props {
  showModal: boolean;
  closeModal(): void;
  isSuccess: boolean;
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ showModal, closeModal, isSuccess }: Props) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  return (
    <>
      {showModal && (
        <Overlay>
          <motion.div
            className={styles.modal_container}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col">
              <div
                className="text-right text-2xl cursor-pointer"
                onClick={() => closeModal()}
              >
                <Image src={Close} alt="close" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-center">
                  <div className="flex flex-col gap-1">
                    <Image src={isSuccess ? Success : Fail} alt="icon" />
                    <div className={styles.title}>
                      {isSuccess ? (
                        <span>
                          Cảm ơn quý khách đã gửi thông tin.
                          <br /> Nhân viên của Edgee sẽ sớm liên hệ lại quý
                          khách.
                        </span>
                      ) : (
                        <span>
                          Đã có lỗi xảy ra. <br />
                          Vui lòng thử lại.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => closeModal()}
                  text="Đóng"
                  className="w-[270px] my-0 mx-auto bg-transparent border-[1px] border-black text-black hover:text-[#ff7a1a] hover:border-[#ff7a1a]"
                />
              </div>
            </div>
          </motion.div>
        </Overlay>
      )}
    </>
  );
};

export default Modal;
