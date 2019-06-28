import { routeConstants } from '../_constants';

export function datacategories (state = {}, action) {
  switch (action.type) {
    case routeConstants.GET_CATEGORIES_REQUEST:
      return {
        loading: true
      };
    case routeConstants.GET_CATEGORIES_SUCCESS:
      return {
        items: action.datacategories
      };
    case routeConstants.GET_CATEGORIES_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}

export function dataproducts (state = {}, action) {
  switch (action.type) {
    case routeConstants.GET_PRODUCTS_REQUEST:
      return {
        loading: true
      };
    case routeConstants.GET_PRODUCTS_SUCCESS:
      return {
        items: action.dataproducts
      };
    case routeConstants.GET_PRODUCTS_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}

export function datadepartments (state = {}, action) {
  switch (action.type) {
    case routeConstants.GET_DEPARTMENTS_REQUEST:
      return {
        loading: true
      };
    case routeConstants.GET_DEPARTMENTS_SUCCESS:
      return {
        items: action.datadepartments
      };
    case routeConstants.GET_DEPARTMENTS_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
