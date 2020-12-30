import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

const selectShop = state => state.shop; // this is getting the complete state in the root reducer and returns a shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections // collections here represent the SHOP_DATA in src/redux/shop/shop.data.js
)

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)