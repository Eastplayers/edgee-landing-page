import { useRouter } from "next/router";
import Image from "next/image";

import Button from "components/Button/Button";

import AppImage from "public/images/e-omni.svg";

import styles from "./SolutionSection.module.scss";

const SolutionEOmni = () => {
  const router = useRouter();

  return (
    <section className={styles.solution_wrapper_e_omni}>
      <Image src={AppImage} alt="E-Omni" />
      <div className="flex flex-col gap-3 lg:w-[500px] w-full">
        <div className={styles.solution_wrapper_title}>E-Omni</div>
        <div className={styles.solution_wrapper_sub_title}>
          Giải pháp quản lý bán hàng đa kênh
        </div>
        <div className={styles.solution_wrapper_content}>
          <div>
            E-Omni là giải pháp quản lý bán hàng đa kênh toàn diện. Khách hàng
            ngay lập tức sở hữu một hệ thống quản lý bán hàng online đầy đủ, vận
            hành ổn định và hiệu quả.
          </div>
          <ul>
            <li>
              Giúp doanh nghiệp nhanh chóng sở hữu một nền tảng kinh doanh
              online <span>vận hành ổn định và hiệu quả.</span>
            </li>
            <li>
              Cung cấp đầy đủ công cụ, giải pháp kinh doanh online cho doanh
              nghiệp <span>trong một hệ thống duy nhất.</span>
            </li>
            <li>Hiểu hơn về doanh nghiệp và khách hàng</li>
          </ul>
        </div>
        <a href="#advise">
          <Button mainBtn={false} className={styles.solution_wrapper_btn}>
            Tư vấn miễn phí
          </Button>
        </a>
      </div>
    </section>
  );
};

export default SolutionEOmni;
