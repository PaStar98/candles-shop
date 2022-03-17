import ProductsInfoListItem from '../ProductsInfoListItem/ProductsInfoListItem';
import styles from './ProductsInfoList.module.scss';

const ProductsInfoList = () => {
  const productsInfoArr = [
    {
      id: 'p1',
      header: '100% PARAFFIN WAX',
      info: "THESE AREN'T FOR SOY BOY BETA-COCKS. REAL WAX LASTS LONGER, SMELLS BETTER, AND DOESN'T FORCE YOU TO WEAR A LITTLE COCK CAGE.",
    },
    {
      id: 'p2',
      header: 'THE BEST SMELLS',
      info: "NO BORING ASS VANILLA BEAN OR CLEAN LINEN SCENTS. YOU'RE GONNA WANNA STICK YOUR TINY DICK RIGHT IN THE HOT WAX.",
    },
    {
      id: 'p3',
      header: "WHAT'S YOUR DEAL?",
      info: 'WHY ARE YOU STILL READING THIS SHIT? WE TOLD YOU EVERYTHING YOU NEED TO KNOW. JUST BUY A FUCKING CANDLE ALREADY OR GO FIST YOUR OWN DICK HOLE.',
    },
  ];

  const productsInfo = productsInfoArr.map(el => (
    <ProductsInfoListItem key={el.id} header={el.header} info={el.info} />
  ));

  return (
    <section className={styles['products-info']}>
      <ul className={styles['products-info__list']}>{productsInfo}</ul>
    </section>
  );
};

export default ProductsInfoList;
