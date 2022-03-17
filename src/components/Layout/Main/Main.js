import styles from './Main.module.scss';

const Main = props => {
  return (
    <article>
      <main className={styles.main}>{props.children}</main>
    </article>
  );
};

export default Main;
