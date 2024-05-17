import * as Types from './Products.Type'

// Định nghĩa các action types
export const fetchRequest = (params) => ({ type: Types.FETCH_REQUEST, params })
export const fetchSuccess = (payload) => ({
  type: Types.FETCH_SUCCESS,
  payload,
})
export const fetchFailure = (error) => ({ type: Types.FETCH_FAILURE, error })
