const NavigationItem = props => {
  return (
    <li className={props.className}>
      <button type={'button'}>{props.val}</button>
    </li>
  );
};

export default NavigationItem;
