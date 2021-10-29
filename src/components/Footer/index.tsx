import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Me siga nas redes Sociais:
        <span className={styles.username}> @tarcisiodelmondes</span>
      </p>

      <span className={styles.copy}>&copy; 2021</span>
    </footer>
  );
}
