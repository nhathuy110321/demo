import { combineReducers } from 'redux'

import productsReducer from '../saga/Products/Products.Reducer'

const rootReducer = () =>
  combineReducers({
    productsReducer,
  })

export default rootReducer
