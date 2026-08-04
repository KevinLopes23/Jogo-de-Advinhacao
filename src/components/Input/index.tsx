import styles from "../Input/styles.module.css";

type Props = React.ComponentProps<"input">;

export  function Input({ ...rest }: Props) {
  return <input type="text" className={styles.input} {...rest} />;
}
