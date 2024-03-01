import {describe, beforeAll} from '@jest/globals';

import {device, expect, element, by} from 'detox';

describe('App Flow', () => {
  beforeAll(async () => {
    await device.launchApp({newInstance: true});
  });

  it('Check if products exist in home screen', async () => {
    await expect(element(by.id('card-0'))).toBeVisible();
    await expect(element(by.id('card-1'))).toBeVisible();
  });

  it('Navigate to product screen', async () => {
    await element(by.id('card-1')).tap();
    await expect(element(by.id('wishlist-button'))).toBeVisible();
  });

  it('Add product to wishlist from product screen', async () => {
    await element(by.id('wishlist-button')).tap();
    await expect(element(by.id('wishlist-button-text'))).toHaveText(
      'REMOVE FROM WISHLIST',
    );
  });

  it('Go back to products', async () => {
    await element(by.id('back-button')).tap();
    await expect(element(by.id('card-0'))).toBeVisible();
    await expect(element(by.id('card-1'))).toBeVisible();
  });

  it('Add product to wishlist from home screen', async () => {
    await element(by.id('heart-button-0')).tap();
    await expect(element(by.id('heart-button-icon-0'))).toBeVisible();
  });

  it('Check if wishlisted products exist in wishlist screen', async () => {
    await element(by.id('Wishlist-tab')).tap();
    await expect(element(by.id('card-0'))).toBeVisible();
    await expect(element(by.id('card-1'))).toBeVisible();
  });

  it('Remove product from wishlist', async () => {
    await element(by.id('heart-button-1')).tap();
    await expect(element(by.id('card-1'))).not.toBeVisible();
  });
});
