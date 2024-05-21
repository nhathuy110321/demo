import * as Types from './Products.Type'

const initialState = {
  products: [],
  pagination: { total: 0, currentPage: 1 },
  params: { page: 1, limit: 12, category: '', search: '' },
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
        products: action?.payload.products ? action?.payload.products : [],
        pagination: action?.payload.pagination
          ? action?.payload.pagination
          : {},
        params: action?.payload.params ? action?.payload.params : {},
      }
    }
    // case Types.FETCH_FAILURE: {
    //   return { ...state }
    // }

    // PUT/POST

    case Types.PATCH_REQUEST: {
      return { ...state }
    }
    case Types.PATCH_SUCCESS: {
      return { ...state }
    }
    // case Types.PATCH_FAILURE: {
    //   return { ...state,error: action.error };
    // }

    // GET
    case Types.GET_REQUEST: {
      return { ...state }
    }
    case Types.GET_SUCCESS: {
      return { ...state, product: action.payload }
    }
    // case Types.GET_FAILURE: {
    //   return { ...state, error: action.error };
    // }

    // DELETE
    case Types.DELETE_REQUEST: {
      return { ...state }
    }
    case Types.DELETE_SUCCESS: {
      return { ...state }
    }
    // case Types.DELETE_FAILURE: {
    //   return { ...state, error: action.error }
    // }

    default:
      return state
  }
}
export default productsReducer
