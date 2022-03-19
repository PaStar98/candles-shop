import Slider from '../../UI/Slider/Slider';
import Main from '../../Layout/Main/Main';
import Headers from './Headers/Headers';
import ProductsInfoList from './ProductsInfo/ProductsInfoList/ProductsInfoList';
import HeaderCard from '../../Layout/HeaderCard/HeaderCard';
import styles from './Home.module.scss';

const Home = () => {
  const headerCardInfo = {
    header: 'Jedyne w swoim rodzaju sojowe świece zapachowe!',
    text: 'Widok pięknych planet na tle galaktyki w połączeniu z niesamowitym zapachem pozwoli Ci na pełen relaks i odpoczynek od codziennych spraw',
  };

  return (
    <Main>
      <HeaderCard
        className={styles.header}
        header={headerCardInfo.header}
        text={headerCardInfo.text}
        h2
      />
      <ProductsInfoList />
      <Slider />
      <Headers />
    </Main>
  );
};

export default Home;
