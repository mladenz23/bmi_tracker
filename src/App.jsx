import { useState } from 'react';
import Input from './components/Input/Input.jsx';
import Results from './components/Results/Results.jsx';
import styled from 'styled-components';

const MainContainer = styled.main`
  width: var(--main-width);
  padding: 1.5rem 0;
  background: linear-gradient(330deg, var(--orange-off), var(--orange-main));
  border-radius: 10px;
  margin-top: 3rem;
`

function App() {
  const [userInput, setUserInput] = useState({
    age: '',
    height: '',
    weight: '',
  });

  const handleInputChange = (inputId, newValue) => {
    setUserInput(prevValue => {
      return {
        ...prevValue,
        [inputId]: +newValue,
      };
    });
  };

  return (
    <>
      <MainContainer>
        <Input
          label='age'
          placeholder='Enter Age'
          onInputChange={handleInputChange}
          inputValue={userInput}
        />
        <Input
          label='height'
          placeholder='cm'
          onInputChange={handleInputChange}
          inputValue={userInput}
        />
        <Input
          label='weight'
          placeholder='kg'
          onInputChange={handleInputChange}
          inputValue={userInput}
        />
      </MainContainer>
      <Results inputValue={userInput} />
    </>
  );
}

export default App;
