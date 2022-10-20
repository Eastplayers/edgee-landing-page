import { useEffect, createRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import lottie from "lottie-web";

import Button from "components/Button/Button";

import AppImage from "public/images/e-cdp.svg";

import styles from "./SolutionSection.module.scss";

const SolutionECdp = () => {
  const router = useRouter();
  const animationContainer = createRef<HTMLDivElement>();

  useEffect(() => {
    const currentAnimationContainer = animationContainer.current;
    if (currentAnimationContainer) {
      const anim = lottie.loadAnimation({
        container: currentAnimationContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://lottie.host/96a34dc9-3532-4c9e-bedd-067844d8ed0c/GyaYMpU1Z4.json",
      });
      return () => anim.destroy();
    }
  }, [animationContainer]);

  return (
    <section className={styles.solution_wrapper_e_cdp}>
      <div className={styles.container}>
        <div className="flex flex-col gap-3 lg:w-[500px] w-full lg:order-1 order-2">
          <div className="flex items-center gap-4">
            <div className={styles.solution_wrapper_title}>E-CDP</div>
            <div className={styles.new_highlight}>
              <div className="absolute -top-[13px] -left-2">
                <div
                  style={{ width: "55px", height: "55px" }}
                  className="animation-container"
                  ref={animationContainer}
                />
              </div>
              Sắp ra mắt
            </div>
          </div>
          <div className={styles.solution_wrapper_sub_title}>
            Nền tảng dữ liệu khách hàng giúp doanh nghiệp thấu hiểu từng khách
            hàng
          </div>
          <div className={styles.solution_wrapper_content}>
            <div>
              E-CDP là một giải pháp đồng nhất dữ liệu khách hàng, giúp doanh
              nghiệp tạo ra các chiến dịch marketing mang tính cá nhân hoá và
              xuyên suốt trên các nền tảng.
            </div>
            <ul>
              <li>
                Cho phép doanh nghiệp thu thập và lưu trữ tất cả các tương tác
                của khách hàng trên đa kênh
              </li>
              <li>
                Thấu hiểu khách hàng qua phân tích chân dung khách hàng 360 độ
              </li>
              <li>
                Nâng cao trải nghiệm khách hàng đối với doanh nghiệp trên tất cả
                các touch point
              </li>
              <li>
                Hợp nhất tất cả các tool Marketing đang sử dụng về một nền tảng
              </li>
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
