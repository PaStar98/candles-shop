import styles from './HeaderCard.module.scss';

const HeaderCard = props => {
  const { h5, h4, h3, h2, h1, header, text } = props;

  // FIXME: THERE MUST BE BETTER WAY TO DO IT
  let headerType;
  if (h5) headerType = <h5>{header}</h5>;
  else if (h4) headerType = <h4>{header}</h4>;
  else if (h3) headerType = <h3>{header}</h3>;
  else if (h2) headerType = <h2>{header}</h2>;
  else if (h1) headerType = <h1>{header}</h1>;
  else headerType = <h5>{header}</h5>;

  return (
    <header className={`${styles.header} ${props.className}`}>
      <h4>{headerType}</h4>
      <span>{text}</span>
    </header>
  );
};

export default HeaderCard;
