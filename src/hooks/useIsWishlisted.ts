import {useMemo} from 'react';
import {useAppSelector} from './useAppSelector';
import {selectWishlist} from '../redux/slices/wishlistSlice';
import {findProduct} from '../utils/functions';

const useIsWishlisted = (id?: number) => {
  const wishlist = useAppSelector(selectWishlist);
  return useMemo(() => findProduct(wishlist, id), [id, wishlist]);
};

export default useIsWishlisted;
