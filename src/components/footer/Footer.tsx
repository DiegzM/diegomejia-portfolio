import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>© {new Date().getFullYear()} Diego Mejia. All rights reserved.</p>
    </div>
  );
}