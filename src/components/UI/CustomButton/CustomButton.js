import styles from './CustomButton.module.scss';

const CustomButton = props => {
  return (
    <button
      className={`${styles.button} ${props.className}`}
      type={props.type || 'button'}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
