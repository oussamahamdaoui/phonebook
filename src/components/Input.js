import { useEffect, useState } from 'react';
import './Input.scss';

function Input({
  label = '',
  type = 'text',
  change = () => { },
  enter = () => {},
  value='',
}) {
  const [hasValue, setHasValue] = useState(false);
  const [val, setValue] = useState(value);

  const handleChanage = (evt) => {
    setValue(evt.target.value);
    change(evt.target.value);
  }

  const handleBlur = () => {
    if (val === '') {
      setHasValue(false);
    }
  }

  useEffect(() => {
    setValue(value);
    if (value !== '') {
      setHasValue(true);
    }
  }, [value]);

  return <div className={'input ' + (hasValue ? 'hasValue' : '')}>
      <div className="label">{label}</div>
    <input type={type}
      value={val}
      onChange={handleChanage}
      onFocus={() => setHasValue(true)}
      onBlur={handleBlur}
      onKeyDown={(evt) => {
        if (evt.key !== 'Enter') return;
        evt.preventDefault();
        enter(val);
      }}
    ></input>
    </div>
}

export default Input;