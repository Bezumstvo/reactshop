import { routeConstants } from "../_constants";
import { productsService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const productsActions = {
  getAll,
  add,
  update,
  remove
};

function getAll(params) {
  return dispatch => {
    productsService
      .getAll(params)
      .then(
        dataproducts => dispatch(success(dataproducts)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_PRODUCTS_REQUEST };
  }
  function success(dataproducts) {
    return { type: routeConstants.GET_PRODUCTS_SUCCESS, dataproducts };
  }
  function failure(error) {
    return { type: routeConstants.GET_PRODUCTS__FAILURE, error };
  }
}

function add(params) {
  return dispatch => {
    productsService
      .add(params)
      .then(
        dataproducts => dispatch(success(dataproducts)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_PRODUCTS_REQUEST };
  }
  function success(dataproducts) {
    return { type: routeConstants.GET_PRODUCTS_SUCCESS, dataproducts };
  }
  function failure(error) {
    return { type: routeConstants.GET_PRODUCTS__FAILURE, error };
  }
}

function update(params) {
  return dispatch => {
    productsService
      .update(params)
      .then(
        dataproducts => dispatch(success(dataproducts)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_PRODUCTS_REQUEST };
  }
  function success(dataproducts) {
    return { type: routeConstants.GET_PRODUCTS_SUCCESS, dataproducts };
  }
  function failure(error) {
    return { type: routeConstants.GET_PRODUCTS__FAILURE, error };
  }
}

function remove(params) {
  return dispatch => {
    productsService
      .remove(params)
      .then(
        dataproducts => dispatch(success(dataproducts)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_PRODUCTS_REQUEST };
  }
  function success(dataproducts) {
    return { type: routeConstants.GET_PRODUCTS_SUCCESS, dataproducts };
  }
  function failure(error) {
    return { type: routeConstants.GET_PRODUCTS__FAILURE, error };
  }
}
