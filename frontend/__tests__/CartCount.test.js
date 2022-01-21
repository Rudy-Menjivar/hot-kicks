import { render } from '@testing-library/react';
import CartCount from '../components/CartCount';

describe('<CartCount>', () => {
  it('Renders', () => {
    render(<CartCount count={10} />);
  });
});
