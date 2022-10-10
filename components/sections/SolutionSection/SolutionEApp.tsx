import Image from "next/image";
import Button from "components/Button/Button";
import AppImage from "public/images/e-app.svg";
import styles from "./SolutionSection.module.scss";

const SolutionEApp = () => {
  return (
    <section className={styles.solution_wrapper_e_app}>
      <Image src={AppImage} alt="E-App" />
      <div className="flex flex-col gap-3 lg:w-[500px] w-full">
        <div className={styles.solution_wrapper_title}>E-App</div>
        <div className={styles.solution_wrapper_sub_title}>
          Mobile app bán hàng
        </div>
        <div className={styles.solution_wrapper_content}>
          <div>
            E-App giúp doanh nghiệp xây dựng được tệp khách hàng trung thành,
            gắn bó lâu dài với thương hiệu của doanh nghiệp.
          </div>
          <ul>
            <li>
              Hệ thống tích điểm, đánh giá hạng thành viên đi kèm với các chương
              trình quà tặng cho user
            </li>
            <li>
              Các tính năng push-up notification giúp doanh nghiệp tương tác với
              khách hàng một cách hiệu quả hơn
            </li>
            <li>
              Các chương trình khuyến khích khách hàng sử dụng và lướt app như:
              tích điểm khi truy cập, vòng xoay may mắn,…
            </li>
            <li>Flash sale</li>
            <li>Livestream bán hàng trong mobile app</li>
          </ul>
        </div>
        <Button mainBtn={false} className={styles.solution_wrapper_btn}>
          Dùng thử miễn phí
        </Button>
      </div>
    </section>
  );
};

export default SolutionEApp;
