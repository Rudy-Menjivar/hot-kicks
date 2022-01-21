import { render, screen } from '@testing-library/react';
import CartCount from '../components/CartCount';

describe('<CartCount>', () => {
  it('Renders', () => {
    render(<CartCount count={10} />);
  });
  it('Matches Snapshot', () => {
    const { container } = render(<CartCount count={12} />);
    expect(container).toMatchSnapshot();
  });
  it('Updates via props', async () => {
    const { container, rerender, debug } = render(<CartCount count={13} />);
    // ? Vanilla JS & fancier custom matcher
    expect(container.textContent).toBe('13');
    // ? Update the props
    rerender(<CartCount count="14" />);
    // ? Tests if duplicated animation is working
    expect(container).toHaveTextContent('1413');
    // ? Built in findBy utility method keeps looking until query times out
    await screen.findByText('14');
    expect(container).toMatchSnapshot();
  });
});
