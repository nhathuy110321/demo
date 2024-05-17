import * as Types from './Products.Type'

const initialState = {
  products: [],
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH
    case Types.FETCH_REQUEST: {
      return { ...state }
    }
    case Types.FETCH_SUCCESS: {
      return {
        ...state,
        products: action?.payload ? action?.payload?.reverse() : [],
      }
    }
    case Types.FETCH_FAILURE: {
      return { ...state }
    }
    default:
      return state
  }
}
export default productsReducer
