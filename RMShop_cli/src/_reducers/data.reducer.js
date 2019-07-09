import { routeConstants } from '../_constants';

export function datafiles (state = {}, action) {
  switch (action.type) {
    case routeConstants.GET_FILES_REQUEST:
      return {
        loading: true
      };
    case routeConstants.GET_FILES_SUCCESS:
      return {
        items: action.datafiles
      };
    case routeConstants.GET_FILES_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}

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

export function dataproduct (state = {}, action) {
  switch (action.type) {
    case routeConstants.GET_PRODUCT_REQUEST:
      return {
        loading: true
      };
    case routeConstants.GET_PRODUCT_SUCCESS:
      return {
        items: action.dataproduct
      };
    case routeConstants.GET_PRODUCT_FAILURE:
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
