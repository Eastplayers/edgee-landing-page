import { useRouter } from "next/router";
import Image from "next/image";

import Button from "components/Button/Button";

import AppImage from "public/images/e-store.svg";

import styles from "./SolutionSection.module.scss";

const SolutionEStore = () => {
  const router = useRouter();

  return (
    <section className={styles.solution_wrapper_e_store}>
      <div className={styles.container}>
        <div className="flex flex-col gap-3 lg:w-[500px] w-full lg:order-1 order-2">
          <div className={styles.solution_wrapper_title}>E-Store</div>
          <div className={styles.solution_wrapper_sub_title}>
            Online store cho doanh nghiệp
          </div>
          <div className={styles.solution_wrapper_content}>
            <ul>
              <li>Website chuẩn SEO</li>
              <li>Tốc độ load trang nhanh</li>
              <li>Thiết kế tối ưu cho mobile</li>
              <li>
                Tìm kiếm sản phẩm hiệu quả nhanh chóng Khách hàng mua sắm nhanh
                chóng và mở tài khoản online
              </li>
              <li>
                Hỗ trợ tích hợp đầy đủ các phương thức thanh toán nội địa lớn
                như: Momo, Thanh toán ngân hàng nội địa, thanh toán qua thẻ
                visa,…
              </li>
              <li>
                Tích hợp sẵn với các đơn vị vận chuyển lớn như: GHTK, Viettel
                Post, Ninjavan,…
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

export default SolutionEStore;
