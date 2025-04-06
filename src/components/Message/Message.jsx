// import { getCategory } from '../../utils/calculator.js';
// import { addCategoryColors } from '../../utils/calculator.js';
import { getData } from '../../utils/calculator.js';
import styled from 'styled-components';

const MessageContainer = styled.div`
  width: 90%;
  background-color: var(--bg-main);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  margin-top: 1rem;

  & .message {
    padding: 1.5rem 1rem;
    font-size: 1em;
    margin: 0;
  }

  & img {
    width: 3rem;
    height: 3rem;
  }
`;

export default function Message({ bmiValue }) {
  return (
    <MessageContainer>
      {getData(bmiValue).img && (
        <img src={getData(bmiValue).img} alt='Image of a light bulb' />
      )}

      <p
        className='message'
        style={{ color: `var(--${getData(bmiValue).color})` }}
      >
        {getData(bmiValue).tip}
      </p>
    </MessageContainer>
  );
}
