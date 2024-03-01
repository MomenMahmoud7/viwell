import {describe, expect} from '@jest/globals';
import {API_URL} from '../src/utils/constants';
import ProductType from '../src/types/product.type';

async function fetchProducts() {
  const res = await fetch(`${API_URL}/products`);
  const json = await res.json();
  return json.products as ProductType[];
}

const fetchMock = jest.spyOn(global, 'fetch');

describe('validate products api', () => {
  test('check products api response data', async () => {
    const products = await fetchProducts();

    expect(fetchMock).toHaveBeenCalledWith(`${API_URL}/products`);
    expect(Array.isArray(products)).toEqual(true);
    expect(
      products.every(product => {
        const {thumbnail, title, price, description, brand, rating} = product;
        return thumbnail && title && price && description && brand && rating;
      }),
    ).toEqual(true);
  });
});
