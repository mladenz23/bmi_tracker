import { useState } from 'react';

import Input from './components/Input/Input.jsx';
import Results from './components/Results/Results.jsx';
import './App.css';

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
      <main>
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
      </main>
      <Results inputValue={userInput} />
    </>
  );
}

export default App;
