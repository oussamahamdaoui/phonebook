import './Button.scss';

function Button({
  onClick = () => { },
  primary= false,
  children,
}) {
  return <button className={'button ' + (primary ? 'primary': '')} onClick={onClick}>{children}</button>
}

export default Button;
