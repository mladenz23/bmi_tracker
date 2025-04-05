import './Input.css';
import { useState } from 'react';

export default function Input({ label, placeholder }) {
  const [inputValue, setInputValue] = useState({
    age: '',
    height: '',
    weight: '',
  });

  const handleInputChange = (inputId, newValue) => {
    setInputValue(prevValue => {
      return {
        ...prevValue,
        [inputId]: +newValue,
      };
    });
  };

  return (
    <div id='input-container'>
      <label htmlFor={label}>{label[0].toUpperCase() + label.slice(1)}</label>
      <input
        type='number'
        pattern='[0-9]*'
        inputMode='numeric'
        min='0'
        placeholder={placeholder}
        id={label}
        value={inputValue.label}
        onChange={e => handleInputChange(label, e.target.value)}
        required
      />
    </div>
  );
}
