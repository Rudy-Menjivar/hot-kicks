import { render } from '@testing-library/react';
import CartCount from '../components/CartCount';

describe('<CartCount>', () => {
  it('Renders', () => {
    render(<CartCount count={10} />);
  });
  it('Matches Snapshot', () => {
    const { container } = render(<CartCount count={12} />);
    expect(container).toMatchSnapshot();
  });
  it('Updates via props', () => {
    const { container, rerender, debug } = render(<CartCount count={13} />);
    // ? Vanillay JS & fancier custom matcher
    expect(container.textContent).toBe('13');
    expect(container).toHaveTextContent('13');
    debug();
    // ? Update the props
    render(<CartCount count="14" />);
    debug();
  });
});
