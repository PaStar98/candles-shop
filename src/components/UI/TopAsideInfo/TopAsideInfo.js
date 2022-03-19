import styles from './TopAsideInfo.module.scss';

const TopAsideInfo = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.contacts}>
        <span className={styles['special-color']}>Telefon:</span>
        <span className={styles['normal-color']}>555-444-333</span>

        <span className={styles['special-color']}>Email:</span>
        <span className={styles['normal-color']}>galaxycandles@wp.pl</span>
      </div>
      <div className={styles.socials}>
        <span>Facebook</span>
        <span>Instagram</span>
      </div>
    </aside>
  );
};

export default TopAsideInfo;
