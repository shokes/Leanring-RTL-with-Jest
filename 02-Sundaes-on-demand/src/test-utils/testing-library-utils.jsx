import { redner, render } from '@testing-library/react';
import { OrderDetailsProvider } from '../contexts/OrderDetails';

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });

// re-export everthing

export * from '@testing-library/react';

// overrride render method

export { renderWithContext as render };
