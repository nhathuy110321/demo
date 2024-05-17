import { takeEvery, put, call } from 'redux-saga/effects'

import * as Types from './Products.Type'
import * as Actions from './Products.Action'
import API from './Products.Api'

function* fetchSaga({ params }) {
  try {
    const response = yield call(API.fetch, params)
    if (response) {
      yield put(Actions.fetchSuccess(response))
    }
  } catch (error) {
    const { data, status } = error.response
    yield put(
      Actions.fetchFailure({
        status: status || error?.status,
        statusText: data || error?.statusText,
      })
    )
  }
}

export function* productsaga() {
  yield takeEvery(Types.FETCH_REQUEST, fetchSaga)
}
