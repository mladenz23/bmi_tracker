import { useState } from 'react';

import Input from './components/Input/Input.jsx';
import Results from './components/Results/Results.jsx';
import './App.css';

function App() {
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

  console.log(inputValue);

  return (
    <>
      <main>
        <Input label='age' placeholder='Enter Age' onInputChange={handleInputChange} inputValue={inputValue} />
        <Input label='height' placeholder='cm' onInputChange={handleInputChange} inputValue={inputValue} />
        <Input label='weight' placeholder='kg' onInputChange={handleInputChange} inputValue={inputValue} />
      </main>
      <Results />
    </>
  );
}

export default App;
