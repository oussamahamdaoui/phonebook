function Input({
  label = '',
  type = 'text',
  change = () => { },
  icon,
}) {
  return <div className="">
      <div className="label">{label}</div>
      <input type={type} onChange={change}></input>
    </div>
}

export default Input;