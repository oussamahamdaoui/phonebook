import './Button.scss';

function Button({
  onClick = () => { },
  type= '',
  children,
  disabeled,
}) {
  return (<button className={'button ' + (type)} onClick={onClick} disabled={disabeled}>
    {children}
  </button>);
}

export default Button;
