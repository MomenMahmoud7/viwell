import {createSlice} from '@reduxjs/toolkit';
import ProductType from '../../types/product.type';
import {RootState} from '../store';
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from '../../utils/functions';

export type WishlistStateType = ProductType[];

const initialState: WishlistStateType = [];

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addProduct: addProductToWishlist,
    removeProduct: removeProductFromWishlist,
  },
});

export const {addProduct, removeProduct} = wishlistSlice.actions;

export const selectWishlist = (state: RootState) => state.wishlist;

export default wishlistSlice;
