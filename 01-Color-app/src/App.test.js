import { render, screen, fireEvent } from '@testing-library/react';
import { replaceCamelWithSpaces } from './App';
import App from './App';
// log roles very important

// import { logRoles } from '@testing-library/react';

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

test('initial conditions', () => {
  render(<App />);
  // check that the button stasrts out enabled7
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toBeEnabled();

  // check that the checbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).not.toBeChecked();
});

test('if the checkbox is disabled on check', () => {
  render(<App />);

  // check of the checkbox is enabled after check
  const checkbox = screen.getByRole('checkbox', { name: 'disable button' });
  const button = screen.getByRole('button');

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test('enabled and disabled button background color changed', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: 'red' });
});

test('click button to change color and disable button to disable button graay', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue' });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'red' });
});

describe('spaces before camel-case capital letters', () => {
  test('works for no inner ccapital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('works for multiple inner ccapital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletBlue')).toBe(
      'Medium Violet Blue'
    );
  });
});
