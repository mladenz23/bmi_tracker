import './Results.css';

export default function Results({ age }) {
  return (
    <div id='results-container'>
      <h2>RESULTS</h2>
      <p>Age: {age}</p>
    </div>
  );
}
