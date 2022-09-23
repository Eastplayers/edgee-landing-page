import styles from "./Title.module.scss";

interface Props {
  mainTitle: string;
}

const Title = ({ mainTitle }: Props) => {
  return <div className={styles.main_title}>{mainTitle}</div>;
};

export default Title;
