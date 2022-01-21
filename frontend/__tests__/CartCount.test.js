import { render } from '@testing-library/react';
import CartCount from '../components/CartCount';

describe('<CartCount>', () => {
  it('Renders', () => {
    render(<CartCount count={10} />);
  });
  it('Matches Snapshot', () => {
    const { container, debug } = render(<CartCount count={12} />);
    expect(container).toMatchSnapshot();
    debug();
  });
});
