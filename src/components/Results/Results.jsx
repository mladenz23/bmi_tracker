import './Results.css';
import { calculateBMI } from '../../utils/calculator.js';
import { getCategory } from '../../utils/calculator.js';

export default function Results({ inputValue }) {
  const bmi = calculateBMI(
    inputValue.age,
    inputValue.height,
    inputValue.weight
  );

  return (
    <div id='results-container'>
      <h2>RESULTS</h2>

      {bmi === '' ? (
        ''
      ) : (
        <>
          <p id='result'>Your BMI: {bmi}</p>
          <p id='category'>{getCategory(bmi)}</p>
        </>
      )}
    </div>
  );
}
