import './Input.css';

export default function Input({ label, placeholder, onInputChange, inputValue }) {
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
        onChange={e => onInputChange(label, e.target.value)}
        required
      />
    </div>
  );
}
