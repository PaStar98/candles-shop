import { useState, useEffect } from "react";
import NavigationItem from "./NavigationItem";
import styles from "./Navigation.module.scss";

import logo from "../../../assets/candles-shop__logo+BG/Logo dla ponurego.png";

const NAVIGATION_CONTENT = [
  {
    id: "n1",
    val: "Strona Główna",
  },
  {
    id: "n2",
    val: "Świece Sojowe",
  },
  {
    id: "n3",
    val: "O Nas",
  },
  {
    id: "n4",
    val: "Kontakt",
  },
];

const Navigation = (props) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // making nav sticky on certain scrollY value
    const onScroll = () => setOffset(window.scrollY);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  const navigationItems = NAVIGATION_CONTENT.map((el) => (
    <NavigationItem
      key={el.id}
      id={el.id}
      className={styles["navigation__list-item"]}
      val={el.val}
      onSetPageContent={props.onSetPageContent}
    />
  ));

  return (
    <header
      className={`${styles["navigation-container"]} ${
        offset > 30 ? styles.sticky : ""
      }`}
    >
      <nav className={styles.navigation}>
        <a className={styles.logo} href="#">
          <img src={logo} alt="Logo Astronauty ze świeczką" />
        </a>
        <ul className={styles["navigation__list"]}>{navigationItems}</ul>
      </nav>
    </header>
  );
};

export default Navigation;
