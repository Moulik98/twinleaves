import * as types from './actionTypes';

const getProductsData = () => async (dispatch) => {
    
    try {
    let res = await fetch(`https://originhighway-staging-kxyaws5ixa-uc.a.run.app/proxy/catalog/products`)
    let data = await res.json()
   dispatch({
            type: types.GET_PRODUCTS_DATA,
            payload: data.data.products,
        })
    }
    catch(err) {
        console.log(err);
    }
  };

const sortHandler = data => dispatch => {
    if ( data.target.value == "1") {
      dispatch({type :types.ASC })
    }else {

      dispatch({type :types.DESC})
    }
  }

const filterHandler = d => dispatch => {
     dispatch({
        type :types.FIlTER_BY_CATEGORY,
        payload: d.target.value
    })
  }

const filterByName = p => dispatch => {
      dispatch({
        type :types.SEARCH_BY_NAME,
        payload: p.target.value
    })
  }
  

  export { getProductsData, sortHandler, filterByName, filterHandler };