import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [backgroundColor, setBackgroundColor] = useState('MediumVioletRed');
  const [enable, setEnable] = useState(false);

  const changeColor = () => {
    if (backgroundColor === 'MediumVioletRed') {
      setBackgroundColor('MidnightBlue');
    } else {
      setBackgroundColor('MediumVioletRed');
    }
  };

  const changeEnable = () => {
    if (enable) {
      setEnable(false);
      setBackgroundColor('MediumVioletRed');
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
        Change to{' '}
        {backgroundColor === 'MediumVioletRed' || enable
          ? 'MidnightBlue'
          : 'MediumVioletRed'}
      </button>
      <input type='checkbox' id='for-disable-button' onChange={changeEnable} />
      <label htmlFor='for-disable-button'>disable button</label>
    </div>
  );
}

export default App;
