import { render, screen } from '../../../test-utils/testing-library-utils';
import Options from '../options';

// for scoops

test('displays image for each scoop option from the server', async () => {
  render(<Options optionType='scoops' />);

  // find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm the alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

// for toppings

test('displays image for each toppings from the server', async () => {
  render(<Options optionType='toppings' />);

  // find images
  const toppingsImages = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  expect(toppingsImages).toHaveLength(3);

  // confirm the alt text of images
  const altText = toppingsImages.map((element) => element.alt);
  expect(altText).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ]);
});
