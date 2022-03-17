import Slider from '../../UI/Slider/Slider';
import Main from '../../Layout/Main/Main';
import Headers from './Headers/Headers';
import ProductsInfoList from './ProductsInfo/ProductsInfoList/ProductsInfoList';

const Home = () => {
  return (
    <Main>
      <Slider />
      <Headers />
      <ProductsInfoList />
    </Main>
  );
};

export default Home;
