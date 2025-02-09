import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Product from '../components/Product';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function OrderPage() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) return <p>Error: {error.message} </p>;
  return (
    <div>
      <ProductsList>
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsList>
    </div>
  );
}
