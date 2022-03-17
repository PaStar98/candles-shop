const NavigationItem = props => {
  const identifyBtnHandler = () => {
    props.onSetPageContent(props.id);
  };

  return (
    <li className={props.className}>
      <button type={'button'} onClick={identifyBtnHandler}>
        {props.val}
      </button>
    </li>
  );
};

export default NavigationItem;
