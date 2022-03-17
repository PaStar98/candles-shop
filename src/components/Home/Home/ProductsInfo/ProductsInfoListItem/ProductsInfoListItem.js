import styles from './ProductsInfoListItem.module.scss';

const ProductsInfoListItem = props => {
  return (
    <li className={styles['products-info__list-item']}>
      <h5>{props.header}</h5>
      <span>{props.info}</span>
    </li>
  );
};

export default ProductsInfoListItem;
