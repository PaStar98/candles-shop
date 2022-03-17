import NavigationItem from './NavigationItem';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const navigationContent = [
    {
      id: 'n1',
      val: 'Home',
    },
    {
      id: 'n2',
      val: 'Świeczki',
    },
    {
      id: 'n3',
      val: 'Mydła',
    },
    {
      id: 'n4',
      val: 'O nas',
    },
  ];

  return (
    <header className={styles['navigation-container']}>
      <nav className={styles.navigation}>
        <h1 className={styles['navigation__logo']}>
          Candles <span>Shop</span>
        </h1>
        <ul className={styles['navigation__list']}>
          {navigationContent.map(el => (
            <NavigationItem
              key={el.id}
              id={el.id}
              className={styles['navigation__list-item']}
              val={el.val}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
