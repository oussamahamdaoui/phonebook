import './Button.scss';

function Button({
  onClick = () => { },
  type= '',
  children,
}) {
  return <button className={'button ' + (type)} onClick={onClick}>{children}</button>
}

export default Button;
