import SummaryForm from '../SummaryForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/react/user-event';

test('checking checkbox states', () => {
  render(<SummaryForm />);

  const user = userEvent.setup();

  const checkbox = screen.getByRole('checkbox', {
    name: 'I agree to Terms and Conditions',
  });
  const orderButton = screen.getByRole('button', {
    name: 'Confirm order',
  });

  // check if the checkbox is unchecked by default
  expect(checkbox).not.toBeChecked();
  expect(orderButton).toBeDisabled();

  // checking if checkbox enables button
  user.click(checkbox);
  expect(orderButton).toBeEnabled();

  // if unchecking checkbox disables button
  user.click(checkbox);
  expect(orderButton).toBeDisabled();
});
