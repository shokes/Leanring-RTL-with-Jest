import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

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
      setBackgroundColor('red');
    } else {
      setEnable(true);
      setBackgroundColor('gray');
    }
  };

  return (
    <div>
      <button
        style={{ backgroundColor: backgroundColor }}
        onClick={changeColor}
        disabled={enable}
      >
        Change to {backgroundColor === 'red' || enable ? 'blue' : 'red'}
      </button>
      <input type='checkbox' id='for-disable-button' onChange={changeEnable} />
      <label htmlFor='for-disable-button'>disable button</label>
    </div>
  );
}

export default App;
