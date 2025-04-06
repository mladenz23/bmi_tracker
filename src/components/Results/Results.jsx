import { calculateBMI } from '../../utils/calculator.js';
import { getCategory } from '../../utils/calculator.js';
import { styled } from 'styled-components';



const ResultsContainer = styled.div`
  width: var(--main-width);
  margin-top: 2rem;
  padding: 2rem 0;
  background-color: var(--bg-off);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    color: var(--orange-main);
  }

  & p {
    margin-top: 1rem;
    font-size: 3em;
  }

  & #category {
    font-size: 1em;
    text-align: center;
    width: 90%;
    background-color: var(--bg-main);
    padding: 1.5rem 1rem;
    border-radius: 10px;
  }
`;

export default function Results({ inputValue }) {
  const bmi = calculateBMI(
    inputValue.age,
    inputValue.height,
    inputValue.weight
  );

  return (
    <ResultsContainer>
      <h2>RESULTS</h2>

      {bmi === '' ? (
        ''
      ) : (
        <>
          <p id='result'>
            Your BMI: <span style={{ color: 'var(--orange-main)' }}>{bmi}</span>
          </p>
          <p id="category" style={{ color: addCategoryColors(bmi)}}>{getCategory(bmi)}</p>
        </>
      )}
    </ResultsContainer>
  );
}
