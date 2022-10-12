import { render, screen, fireEvent } from '@testing-library/react';

// log roles very important

// import { logRoles } from '@testing-library/react';
import App from './App';

test('button has correct initial color and updates when clicked', () => {
  render(<App />);

  // tests that we have a button and the text on it is 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expext background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);

  // expext background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // tests that the text on the button has changed to 'Change to red'

  expect(colorButton).toHaveTextContent('Change to red');
});

// test('button turns blue when clicked on', () => {
//   const colorButton = screen.getByRole('button', { name: 'Change to blue' });

//   expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
// });
