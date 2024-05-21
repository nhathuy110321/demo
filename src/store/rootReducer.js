import { combineReducers } from 'redux'

import productsReducer from '../saga/Products/Products.Reducer'

const rootReducer = combineReducers({
  product: productsReducer,
})

export default rootReducer
