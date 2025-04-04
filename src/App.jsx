import { useState } from 'react';

import Input from './components/Input/Input.jsx';
import Results from './components/Results/Results.jsx';
import './App.css';

function App() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  return (
    <>
      <main>
        <Input label='age' placeholder='Enter Age' />
        <Input label='height' placeholder='cm' />
        <Input label='weight' placeholder='kg' />
      </main>

      <Results />
    </>
  );
}

export default App;
