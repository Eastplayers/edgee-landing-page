import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import moment from "moment";

import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";

import Facebook from "public/icons/facebook.svg";
import Youtube from "public/icons/youtube.svg";
import Phone from "public/icons/phone.svg";
import IconOne from "public/images/footer-icon-one.svg";
import IconTwo from "public/images/footer-icon-two.svg";

import styles from "./Footer.module.scss";

interface IFormData {
  name: string;
  phone: string;
  email: string;
  description: string;
}

const Footer = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IFormData>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = handleSubmit(async (data) => {
    const dataForm = {
      ...data,
      date: moment().format("MMMM Do YYYY, h:mm:ss a"),
    };

    try {
      setIsLoading(true);
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });

      const content = await response.json();
      alert(content.data.tableRange);

      reset();
      setIsSuccess(true);
    } catch (e) {
      setIsSuccess(false);
    } finally {
      setShowModal(true);
      setIsLoading(false);
    }
  });

  return (
    <>
      <section id="advise" className={styles.footer_wrapper}>
        <div className={styles.footer_wrapper_container}>
          <div className={styles.footer_wrapper_container_social}>
            <div className={styles.title}>Đăng ký nhận demo miễn phí</div>
            <div className={styles.text}>
              Nhân viên Edgee sẽ sớm phản hồi lại bạn!
            </div>
            <div className="flex gap-6">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className={classNames(styles.social_icon, styles.social)}
              >
                <Image src={Facebook} alt="Facebook" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className={classNames(styles.social_icon, styles.social)}
              >
                <Image src={Youtube} alt="Youtube" />
              </a>
              <div className="flex items-center gap-2">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className={classNames(styles.social_icon, styles.phone)}
                >
                  <Image src={Phone} alt="Phone" />
                </a>
                <div className={styles.phone_number}>1900545415</div>
              </div>
            </div>
          </div>

          <div className={styles.footer_wrapper_container_form}>
            <form onSubmit={onSubmit} className={styles.form}>
              <div className={styles.form_item}>
                <input
                  {...register("name", {
                    required: "Vui lòng điền họ và tên",
                  })}
                  type="text"
                  name="name"
                  placeholder="Họ và tên"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className={styles.form_item}>
                <input
                  {...register("phone", {
                    required: "Vui lòng điền số điện thoại",
                  })}
                  type="text"
                  name="phone"
                  placeholder="Số điện thoại"
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className={styles.form_item}>
                <input
                  {...register("email", {
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    required: "Vui lòng điền email",
                  })}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className={styles.form_item}>
                <textarea
                  {...register("description", {
                    required: "Vui lòng điền nội dung yêu cầu",
                  })}
                  rows={4}
                  name="description"
                  placeholder="Nội dung yêu cầu"
                />
                {errors.description && (
                  <span className="text-red-500 text-xs">
                    {errors.description.message}
                  </span>
                )}
              </div>

              <Button type="submit">
                {isLoading ? "Chờ..." : "Tư vấn ngay"}
              </Button>
            </form>

            <motion.div
              animate={{ y: [0, -420, 0] }}
              transition={{ duration: 30, repeat: Infinity }}
              className={styles.icon_one}
            >
              <Image src={IconOne} />
            </motion.div>
            <div className={styles.copyright}>
              © Bản quyền 2022 thuộc về Edgee
            </div>
          </div>
        </div>

        <div className="absolute top-10 3xl:right-[620px] right-[50px] lg:block hidden">
          <motion.div
            animate={{ y: [0, 520, 0] }}
            transition={{ duration: 30, repeat: Infinity }}
            className={styles.icon_two}
          >
            <Image src={IconTwo} />
          </motion.div>
        </div>
      </section>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        <Modal
          showModal={showModal}
          isSuccess={isSuccess}
          closeModal={() => setShowModal(!showModal)}
        />
      </AnimatePresence>
    </>
  );
};

export default Footer;
