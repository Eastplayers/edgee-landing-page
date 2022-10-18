import Title from "components/Title/Title";

import SolutionEOmni from "./SolutionEOmni";
import SolutionEStore from "./SolutionEStore";
import SolutionEApp from "./SolutionEApp";
import SolutionECdp from "./SolutionECdp";

import styles from "./SolutionSection.module.scss";

const SolutionSection = () => {
  return (
    <section id="solution-section" className={styles.solution_wrapper}>
      <div className="flex justify-center lg:mb-14 mb-7">
        <Title mainTitle="Khám phá các giải pháp từ Edgee" />
      </div>
      <SolutionEOmni />
      <SolutionEStore />
      <SolutionEApp />
      <SolutionECdp />
    </section>
  );
};

export default SolutionSection;
