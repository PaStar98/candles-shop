import Main from '../../Layout/Main/Main';
import CandlesShopList from './CandlesShopList/CandlesShopList';
import styles from './Candles.module.scss';

const Candles = () => {
  return (
    <Main>
      <figure className={styles['candle-img']}>
        <img
          src="https://media.istockphoto.com/photos/melting-candle-on-cool-blue-background-picture-id1016998564?k=20&m=1016998564&s=612x612&w=0&h=nAI9E3kVuOYfTE-Mbk7SDsZoPfQpXLGPJ7bZsdYrjJI="
          alt="Great Candle Image"
        />
      </figure>
      <header className={styles.header}>
        <h5>YOU CAME THIS FAR, DON'T BE A PUSSY</h5>
        <span>ALL THESE FUCKING CANDLES ARE A GREAT DEAL</span>
      </header>
      <CandlesShopList />
    </Main>
  );
};

export default Candles;
