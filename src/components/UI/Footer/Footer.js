import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles['footer__socials-list']}>
        <li>
          <a href="#">Facebook</a>
        </li>

        <li>
          <a href="#">Instagram</a>
        </li>

        <li>
          <a href="#">Gmail</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
