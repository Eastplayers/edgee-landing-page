import Title from "components/Title/Title";

// import LogoIcon from "public/icons/logo-gray.svg";
// import BannerImg from "public/images/banner-competition.png";

import SolutionEOmni from "./SolutionEOmni";
import SolutionEStore from "./SolutionEStore";
import SolutionEApp from "./SolutionEApp";
import SolutionECdp from "./SolutionECdp";

import styles from "./SolutionSection.module.scss";

const SolutionSection = () => {
  return (
    <div className={styles.solution_wrapper}>
      <div className="flex justify-center lg:mb-14 mb-7">
        <Title mainTitle="Các giải pháp của Edgee" />
      </div>
      <SolutionEOmni />
      <SolutionEStore />
      <SolutionEApp />
      <SolutionECdp />
    </div>
  );
};

export default SolutionSection;
