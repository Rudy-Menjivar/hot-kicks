import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import SingleProduct, { SINGLE_ITEM_QUERY } from '../components/SingleProduct';
import { fakeItem } from '../lib/testUtils';

const product = fakeItem();

const mocks = [
  {
    // ? When someone requests this query and variable combo
    request: {
      query: SINGLE_ITEM_QUERY,
      variables: {
        id: '123',
      },
    },
    // ? Return this data
    result: {
      data: {
        Product: product,
      },
    },
  },
];

describe('<Single Product/>', () => {
  it('renders with proper data', async () => {
    // ? We need to make some fake data
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <SingleProduct id="123" />
      </MockedProvider>
    );
    // ? Wait for testId to show up before
    await screen.findByTestId('singleProduct');
    debug();
    expect(container).toMatchSnapshot();
  });
});
