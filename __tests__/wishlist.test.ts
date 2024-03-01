import {describe, it, expect} from '@jest/globals';
import {
  addProductToWishlist,
  findProduct,
  removeProductFromWishlist,
} from '../src/utils/functions';

const wishlist = [
  {
    id: 1,
    title: 'title',
    description: 'description',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: 'brand',
    category: 'category',
    thumbnail: 'thumbnail',
    images: ['image'],
  },
  {
    id: 2,
    title: 'title',
    description: 'description',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: 'brand',
    category: 'category',
    thumbnail: 'thumbnail',
    images: ['image'],
  },
];

describe('findProduct', () => {
  it('should return true if product is wishlisted', () => {
    const productId = 1;
    const result = findProduct(wishlist, productId);

    expect(result).toBe(true);
  });

  it('should return false if product is not wishlisted', () => {
    const productId = 4;
    const result = findProduct(wishlist, productId);

    expect(result).toBe(false);
  });
});

describe('addProductToWishlist', () => {
  it('should return new wishlist includes the product', () => {
    const product = {
      id: 5,
      title: 'title',
      description: 'description',
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: 'brand',
      category: 'category',
      thumbnail: 'thumbnail',
      images: ['image'],
    };
    const result = addProductToWishlist(wishlist, {payload: product, type: ''});

    expect(result).toHaveLength(wishlist.length + 1);
    expect(result).toContain(product);
  });
});

describe('removeProductFromWishlist', () => {
  it('should return new wishlist without the removed product', () => {
    const productId = 1;
    const result = removeProductFromWishlist(wishlist, {
      payload: productId,
      type: '',
    });

    expect(result).toHaveLength(wishlist.length - 1);
    expect(result).not.toContain(wishlist[0]);
  });
});
