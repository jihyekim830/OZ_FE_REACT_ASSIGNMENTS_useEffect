import { useState } from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <>
      {showCounter && <Counter />}
      <br />
      <button className="show-btn" onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? 'hide' : 'Show?'}
      </button>
    </>
  );
}

export default App;
