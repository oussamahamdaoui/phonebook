import { useState } from 'react';
import './Input.scss';

function Input({
  label = '',
  type = 'text',
  change = () => { },
  value='',
}) {
  const [hasValue, setHasValue] = useState(false);
  const [val, setValue] = useState(value);

  const handleChanage = (evt) => {
    setValue(evt.target.value);
  }

  const handleBlur = () => {
    if (val === '') {
      setHasValue(false);
    }
  }

  return <div className={'input ' + (hasValue ? 'hasValue' : '')}>
      <div className="label">{label}</div>
    <input type={type}
      value={val}
      onChange={handleChanage}
      onFocus={() => setHasValue(true)}
      onBlur={handleBlur}
    ></input>
    </div>
}

export default Input;