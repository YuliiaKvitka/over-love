import styles from './Menu.module.css';

const Menu = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>How it Works</li>
      <li className={styles.item}>Features</li>
      <li className={styles.item}>Pricing</li>
      <li className={styles.item}>Help</li>
      <li className={styles.item}>Blog</li>
      <li className={styles.item}>Log in</li>
    </ul>
  );
};

export default Menu;
