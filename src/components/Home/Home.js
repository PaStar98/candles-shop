import Slider from '../UI/Slider/Slider';
import Main from '../Layout/Main/Main';
import HeaderCard from '../Layout/HeaderCard/HeaderCard';
import styles from './Home.module.scss';

const Home = () => {
  const headerCardsArr = [
    {
      id: 'hc1',
      header:
        'YOU THINK YOU KNOW THE FIRST GOD DAMN THING ABOUT SCENTED CANDLES?',
      text: "WELL YOU DON'T KNOW SHIT AND YOU'RE A FUCKING IDIOT. EVERY SCENTED CANDLE YOU'VE EVER SMELLED IS DOG SHIT. YOUR TINY LITTLE PEA BRAIN CAN'T HANDLE A REAL SCENTED CANDLE. YOU AREN'T READY AND YOU NEVER WILL BE. KEEP BUYING THOSE DIRTY DIAPER CANDLES FROM WALMART AND THE MALL YOU GARBAGE EATING ASSHOLE.",
    },
    {
      id: 'hc2',
      header:
        "YOU NEED THESE CANDLES OR EVERYONE WILL HATE YOU AND YOU'LL NEVER BE HAPPY",
      text: "YOU DON'T KNOW WHAT SMELLS GOOD, WE DO, THAT'S WHY WE DO IT FOR A LIVING. EVERYTIME SOMEONE COMES TO YOUR HOUSE AND THEY DON'T SMELL THESE CANDLES, THEY THINK YOU'RE A STUPID FUCKING DICKHEAD. THEY ALL DO FUN THINGS WHEN YOU AREN'T AROUND AND TALK ABOUT HOW YOUR MOM HAS A GIANT HAIRY BUSH.",
    },
  ];

  const headerCards = headerCardsArr.map(el => (
    <HeaderCard
      key={el.id}
      className={styles['header-card']}
      header={el.header}
      text={el.text}
    />
  ));

  return (
    <Main>
      <Slider />
      <section className={styles['header-cards']}>{headerCards}</section>
    </Main>
  );
};

export default Home;
