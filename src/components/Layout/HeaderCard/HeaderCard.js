import styles from './HeaderCard.module.scss';

const HeaderCard = props => {
  return (
    <header className={props.className}>
      <h4>{props.header}</h4>
      <span>{props.text}</span>
    </header>
  );
};

export default HeaderCard;
