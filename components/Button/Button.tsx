import { ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface Props {
  text?: string;
  children?: ReactNode;
  className?: string;
  mainBtn?: boolean;
  backBtn?: boolean;
  type?: string | undefined;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  text,
  children,
  className,
  mainBtn = true,
  backBtn = false,
  type,
  onClick,
  disabled,
}: Props) => {
  const btnContainer = classNames(
    { [styles.main_btn_container]: mainBtn },
    { [styles.second_btn_container]: !mainBtn },
    { [styles.black_btn_container]: backBtn },
    className
  );

  return (
    <button className={btnContainer} disabled={disabled} onClick={onClick}>
      {text || children}
    </button>
  );
};

export default Button;
