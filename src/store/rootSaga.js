import { all } from 'redux-saga/effects'

import { productsaga } from '../saga/Products/Products.Saga'

export default function* rootSaga() {
  yield all([productsaga()])
}
