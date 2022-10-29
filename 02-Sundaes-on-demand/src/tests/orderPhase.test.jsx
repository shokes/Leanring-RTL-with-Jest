import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('order phase for happy path', () => {
  //render the app
  render(<App />);

  // add ice creams andd toppings
  //  find and click the order button
  // check summary is correct based on order
  // accept terms and conditons and click button to accept order
  //  confirm order number and confirmation page
  // click new order button on confirmation page
  // check that scoops and toppings subtotals have been reset
  // do we need to await anything to avoid a test error
});
