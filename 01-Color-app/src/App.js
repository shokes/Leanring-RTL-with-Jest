import './App.css';
import { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('red');
  const [enable, setEnable] = useState(false);

  const changeColor = () => {
    if (backgroundColor === 'red') {
      setBackgroundColor('blue');
    } else {
      setBackgroundColor('red');
    }
  };

  const changeEnable = () => {
    if (enable) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  };

  return (
    <div>
      <button
        style={{ backgroundColor: backgroundColor }}
        onClick={changeColor}
        disabled={enable}
      >
        Change to {backgroundColor === 'red' ? 'blue' : 'red'}
      </button>
      <input type='checkbox' id='for-disable-button' onChange={changeEnable} />
      <label htmlFor='for-disable-button'>disable button</label>
    </div>
  );
}

export default App;
