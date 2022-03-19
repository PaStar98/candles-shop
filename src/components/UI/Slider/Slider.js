import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import candles from '../../../assets/candles/candlesDispatch';

import CustomButton from "../CustomButton/CustomButton";
import styles from './Slider.module.scss';

const Slider = () => {
  return (
    <section className={styles['slider-container']}>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        speed={2000}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        // pagination={{ clickable: true, dynamicBullets: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {candles.map((el, index) => (
          <SwiperSlide key={index.toString()}>
            <figure className={styles.slide}>
              <img  src={el} alt="candle" />
              <figcaption>
                <CustomButton className={styles.btn}>Sprawdź</CustomButton>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
