import './Input.css';

export default function Input({ label, value, placeholder, onUserInput }) {
  return (
    <div id="input-container">
      <label htmlFor={label}>{label[0].toUpperCase() + label.slice(1)}</label>
      <input
        type="number"
        pattern="[0-9]*"
        inputMode="numeric"
        placeholder={placeholder}
        id={label}
        value={value}
        onChange={(e) => onUserInput(e.target.value)}
      />
    </div>
  )
}