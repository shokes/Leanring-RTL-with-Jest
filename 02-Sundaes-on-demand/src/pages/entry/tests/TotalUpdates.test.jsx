import { render, screen } from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import Options from '../Options';
import OrderEntry from '../OrderEntry';

test('update scoop subtotal when scoop changes', async () => {
  const user = userEvent.setup();
  render(<Options optionType='scoops' />);

  // make sure total starts out $0.00

  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
  expect(scoopsSubtotal).toHaveTextContent('0.00');

  // update the vanila scoops to 1 and check the subtotal

  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });

  await user.clear(vanillaInput);
  await user.type(vanillaInput, '1');

  expect(scoopsSubtotal).toHaveTextContent('2.00');

  // update the chocolate scoops to 2 and check the subtotal
  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  });

  await user.clear(chocolateInput);
  await user.type(chocolateInput, '2');

  expect(scoopsSubtotal).toHaveTextContent('6.00');
});

test('for toppings subtotal', async () => {
  const user = userEvent.setup();
  render(<Options optionType='toppings' />);

  // assert on default toppings subtotal
  const toppingsSubtotal = screen.getByText('Toppings total $', {
    exact: false,
  });
  expect(toppingsSubtotal).toHaveTextContent('0.00');

  // find and tick one box, assert on updated subtotal
  const cherriesCheckbox = await screen.findByRole('checkbox', {
    name: 'Cherries',
  });
  await user.click(cherriesCheckbox);
  expect(toppingsSubtotal).toHaveTextContent('1.50');

  // tick another box and assert on subtotal
  const Mcheckbox = await screen.findByRole('checkbox', {
    name: 'M&Ms',
  });

  await user.click(Mcheckbox);
  expect(toppingsSubtotal).toHaveTextContent('3.00');

  // tick one of the boxes off
  await user.click(cherriesCheckbox);
  expect(toppingsSubtotal).toHaveTextContent('1.50');
  await user.click(cherriesCheckbox);
  expect(toppingsSubtotal).toHaveTextContent('3.00');
});

describe('grand total', () => {
  test('grand total starts at $0.00', () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByText('Grand total: $', {
      exact: false,
    });

    expect(grandTotal).toHaveTextContent('0.00');
  });

  test('grand total updates properly if scoop is added first', async () => {
    const user = userEvent.setup();
    render(<OrderEntry />);
    const chocolateInput = await screen.findByRole('spinbutton', {
      name: 'Chocolate',
    });

    await user.clear(chocolateInput);
    await user.type(chocolateInput, '2');
    const grandTotal = screen.getByText('Grand total: $', {
      exact: false,
    });
    expect(grandTotal).toHaveTextContent('4.00');

    const Mcheckbox = await screen.findByRole('checkbox', {
      name: 'M&Ms',
    });

    await user.clear(Mcheckbox);
    await user.click(Mcheckbox);

    expect(grandTotal).toHaveTextContent('5.50');
  });

  test('grand total updates properly if topping is added first', async () => {
    const user = userEvent.setup();
    render(<OrderEntry />);
    const Mcheckbox = await screen.findByRole('checkbox', {
      name: 'M&Ms',
    });

    await user.clear(Mcheckbox);
    await user.click(Mcheckbox);

    const chocolateInput = await screen.findByRole('spinbutton', {
      name: 'Chocolate',
    });

    await user.clear(chocolateInput);
    await user.type(chocolateInput, '2');

    const grandTotal = screen.getByText('Grand total: $', {
      exact: false,
    });

    expect(grandTotal).toHaveTextContent('5.50');
  });

  test('grand total to update properly if item is removed', async () => {
    const user = userEvent.setup();
    render(<OrderEntry />);
    const chocolateInput = await screen.findByRole('spinbutton', {
      name: 'Chocolate',
    });

    await user.clear(chocolateInput);
    await user.type(chocolateInput, '2');

    const grandTotal = screen.getByText('Grand total: $', {
      exact: false,
    });

    expect(grandTotal).toHaveTextContent('4.00');

    await user.clear(chocolateInput);

    expect(grandTotal).toHaveTextContent('0.00');
  });
});
