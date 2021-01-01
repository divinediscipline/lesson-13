import { createSelector } from 'reselect';

const selectShop = state => state.shop; // this is getting the complete state in the root reducer and returns a shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections // collections here represent the SHOP_DATA in src/redux/shop/shop.data.js
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections[collectionUrlParam]
)