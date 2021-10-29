import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  disabled?: boolean;
  backgroundColor: string;
  color: string;
};

export function Button({
  text,
  disabled = false,
  backgroundColor,
  color,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={styles.button}
      {...rest}
      disabled={disabled}
      style={{ backgroundColor, color }}
    >
      {text}
    </button>
  );
}
