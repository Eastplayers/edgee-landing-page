import Image from "next/image";
import Button from "components/Button/Button";
import AppImage from "public/images/e-cdp.svg";
import styles from "./SolutionSection.module.scss";

const SolutionECdp = () => {
  return (
    <section className={styles.solution_wrapper_e_cdp}>
      <div className={styles.container}>
        <div className="flex flex-col gap-3 lg:w-[500px] w-full lg:order-1 order-2">
          <div className={styles.solution_wrapper_title}>E-CDP</div>
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
          <Button mainBtn={false} className={styles.solution_wrapper_btn}>
            Dùng thử miễn phí
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
