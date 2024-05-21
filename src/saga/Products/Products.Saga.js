import { takeEvery, put, call, select } from 'redux-saga/effects'

import * as Types from './Products.Type'
import * as Actions from './Products.Action'
import API from './Products.Api'

function* fetchSaga({ params }) {
  try {
    const oldParams = yield select((state) => state.product.params)
    const response = yield call(API.fetch, { ...oldParams, ...params })
    const { totalProducts, currentPage } = response.pagination
    const result = {
      products: response.data,
      pagination: {
        total: totalProducts,
        currentPage,
      },
      params: { ...oldParams, ...params },
    }
    if (response) {
      yield put(Actions.fetchSuccess(result))
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

function* getSaga({ params }) {
  try {
    const response = yield call(API.get, params?.id)
    if (response) {
      yield put(Actions.getSuccess(response))
    }
  } catch (error) {
    const { data, status } = error.response
    yield put(
      Actions.getFailure({
        status: status || error?.status,
        statusText: data || error?.statusText,
      })
    )
  }
}
function* deleteSaga({ params }) {
  try {
    const response = yield call(API.delete, params)
    if (response) {
      yield put(Actions.deleteSuccess(response))
      yield put(Actions.fetchRequest())
    }
  } catch (error) {
    const { data, status } = error.response
    yield put(
      Actions.deleteFailure({
        status: status || error?.status,
        statusText: data || error?.statusText,
      })
    )
  }
}
function* patchSaga({ params }) {
  try {
    if (params?.id) {
      yield call(API.put, params)
    } else {
      yield call(API.post, params)
    }

    yield put(Actions.patchSuccess())

    yield put(Actions.fetchRequest())
  } catch (error) {
    const { data, status } = error.response
    yield put(
      Actions.patchFailure({
        status: status || error?.status,
        statusText: data || error?.statusText,
      })
    )
  }
}
export function* productsaga() {
  yield takeEvery(Types.FETCH_REQUEST, fetchSaga)
  yield takeEvery(Types.PATCH_REQUEST, patchSaga)
  yield takeEvery(Types.DELETE_REQUEST, deleteSaga)

  yield takeEvery(Types.GET_REQUEST, getSaga)
}
