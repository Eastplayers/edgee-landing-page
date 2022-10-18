import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Button from "components/Button/Button";

import AppImage from "public/images/e-cdp.svg";

import styles from "./SolutionSection.module.scss";

const SolutionECdp = () => {
  const router = useRouter();

  const ref = useRef(null);
  useEffect(() => {
    import("@dotlottie/player-component");
  });

  return (
    <section className={styles.solution_wrapper_e_cdp}>
      <div className={styles.container}>
        <div className="flex flex-col gap-3 lg:w-[500px] w-full lg:order-1 order-2">
          <div className="flex items-center gap-4">
            <div className={styles.solution_wrapper_title}>E-CDP</div>
            <div className={styles.new_highlight}>
              <div className="absolute -top-[13px] -left-2">
                <dotlottie-player
                  ref={ref}
                  src="https://lottie.host/96a34dc9-3532-4c9e-bedd-067844d8ed0c/GyaYMpU1Z4.json"
                  autoplay
                  loop
                  style={{
                    height: "55px",
                    width: "55px",
                  }}
                />
              </div>
              Mới ra mắt
            </div>
          </div>
          <div className={styles.solution_wrapper_sub_title}>
            Nền tảng dữ liệu khách hàng giúp DN thấu hiểu theo thời gian thực
          </div>
          <div className={styles.solution_wrapper_content}>
            <div>
              E-Omni là giải pháp quản lý bán hàng đa kênh toàn diện. Khách hàng
              ngay lập tức sở hữu một hệ thống quản lý bán hàng online đầy đủ,
              vận hành ổn định và hiệu quả.
            </div>
            <ul>
              <li>
                Giúp doanh nghiệp nhanh chóng sở hữu một nền tảng kinh doanh
                online vận hành ổn định và hiệu quả.
              </li>
              <li>
                Cung cấp đầy đủ công cụ, giải pháp kinh doanh online cho doanh
                nghiệp trong một hệ thống duy nhất.{" "}
              </li>
              <li>Hiểu hơn về doanh nghiệp và khách hàng </li>
            </ul>
          </div>
          <Button
            mainBtn={false}
            className={styles.solution_wrapper_btn}
            onClick={() => router.push("/#advise")}
          >
            Tư vấn miễn phí
          </Button>
        </div>
        <div className="lg:order-2 order-1">
          <Image src={AppImage} alt="E-Store" />
        </div>
      </div>
    </section>
  );
};

export default SolutionECdp;
