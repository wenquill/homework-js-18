import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>Users List</h1>
        <p className={styles.subtitle}>you can select and delete users here if you want!</p>
    </header>
  )
}

export default Header