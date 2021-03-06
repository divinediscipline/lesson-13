import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development'){
  middlewares.push(logger)
}
// do not need this export
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// do not need this export
export const persistor = persistStore(store);

export default { store, persistor }
