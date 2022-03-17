import candles from '../../../../assets/candles/candlesDispatch';

import CandlesShopListItem from './CandlesShopListItem';
import styles from './CandlesShopList.module.scss';

const CandlesShopList = () => {
  const candlesList = candles.map((el, index) => (
    <CandlesShopListItem key={`can${index}`} candleImg={el} />
  ));

  return (
    <section className={styles['candles-shop']}>
      <ul className={styles['candles-shop__list']}>{candlesList}</ul>
    </section>
  );
};

export default CandlesShopList;
