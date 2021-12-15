import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

export default function UpdateProduct({ id }) {
  // TODO: Get mutation to update product, & a form to handle updates
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });
  console.log({ data });

  return <p>Update {id}!</p>;
}
