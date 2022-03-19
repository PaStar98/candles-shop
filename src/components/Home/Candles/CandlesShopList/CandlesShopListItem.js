import CustomButton from '../../../UI/CustomButton/CustomButton';
import styles from './CandlesShopListItem.module.scss';

const CandlesShopListItem = props => {
  return (
    <li className={styles.item}>
      <figure>
        <img src={props.candleImg} alt="" />
        <figcaption>item</figcaption>
      </figure>
      <div className={styles.info}>
        <span className={styles.price}>$24,99</span>
        <span className={styles.ingredients}>Lemon, Your Mom, Vodka</span>
      </div>
      <div className={styles['btn-container']}>
        <CustomButton className={styles.btn}>Sprawdź</CustomButton>
      </div>
    </li>
  );
};

export default CandlesShopListItem;

// TODO: CHANGE WIDTH VALUE FROM PERCENTAGE TO CONSTANT
// FIXME: RESOLVE PROBLEM WITH IMG SIZE ADJUST
