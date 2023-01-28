import * as types from './actionTypes';

const initialState = {

    productsData: []
}

const reducer =  (oldState = initialState, action) => {

    const {type, payload} = action;

    switch (type) {
        case types.GET_PRODUCTS_DATA: {
            return { 
            ...oldState,
            productsData: payload,
            };
        }
        case types.ASC: {
            return {
              ...oldState,
              productsData: [
                ...oldState.productsData.sort((a, b) => a.mrp.mrp - b.mrp.mrp),
              ],
            };
          }
          case types.DESC: {
            return {
              ...oldState,
              productsData: [
                ...oldState.productsData.sort((a, b) => b.mrp.mrp - a.mrp.mrp),
              ],
            };
        }
        case types.FIlTER_BY_CATEGORY: {
            return {
              ...oldState,
              productsData: [
                ...oldState.productsData?.filter((elm) => elm.category_level_1 !== action.payload.value)
              ]
            };
        }
        case types.SEARCH_BY_NAME: {
            return {
              ...oldState,
              productsData: [
                ...oldState.productsData?.filter((elm) => elm.name == action.payload.value),
              ],
            };
        }
    default:
        return oldState;
    }
}

export { reducer };