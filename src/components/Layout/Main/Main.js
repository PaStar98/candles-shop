import styles from './Main.module.scss';

const Main = props => {
  return (
      <main className={styles.main}>
        <article>{props.children}</article>
      </main>
  );
};

export default Main;
