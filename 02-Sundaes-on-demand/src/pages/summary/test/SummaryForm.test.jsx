import SummaryForm from '../SummaryForm';
import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/react/user-event';
import userEvent from '@testing-library/user-event';

test('checking checkbox states', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

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
  await user.click(checkbox);
  expect(orderButton).toBeEnabled();

  // if unchecking checkbox disables button
  await user.click(checkbox);
  expect(orderButton).toBeDisabled();
});

test('popover responds to mouse over', async () => {
  // const user = userEvent.setup();
  render(<SummaryForm />);

  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );

  expect(nullPopover).not.toBeInTheDocument();

  // popover appears on mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await userEvent.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  // const popover = screen.getByText(/no ice cream will actually be delivered/i);

  expect(popover).toBeInTheDocument();

  //popover disappears when we mouse out
  await userEvent.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
