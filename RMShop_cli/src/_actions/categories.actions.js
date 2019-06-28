import { routeConstants } from "../_constants";
import { categoriesService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const categoriesActions = {
  getAll,
  add,
  update,
  remove
};

function getAll(params) {
  return dispatch => {
    categoriesService
      .getAll(params)
      .then(
        datacategories => dispatch(success(datacategories)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_CATEGORIES_REQUEST };
  }
  function success(datacategories) {
    return { type: routeConstants.GET_CATEGORIES_SUCCESS, datacategories };
  }
  function failure(error) {
    return { type: routeConstants.GET_CATEGORIES__FAILURE, error };
  }
}

function add(params) {
  return dispatch => {
    categoriesService
      .add(params)
      .then(
        datacategories => dispatch(success(datacategories)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_CATEGORIES_REQUEST };
  }
  function success(datacategories) {
    return { type: routeConstants.GET_CATEGORIES_SUCCESS, datacategories };
  }
  function failure(error) {
    return { type: routeConstants.GET_CATEGORIES__FAILURE, error };
  }
}

function update(params) {
  return dispatch => {
    categoriesService
      .update(params)
      .then(
        datacategories => dispatch(success(datacategories)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_CATEGORIES_REQUEST };
  }
  function success(datacategories) {
    return { type: routeConstants.GET_CATEGORIES_SUCCESS, datacategories };
  }
  function failure(error) {
    return { type: routeConstants.GET_CATEGORIES__FAILURE, error };
  }
}

function remove(params) {
  return dispatch => {
    categoriesService
      .remove(params)
      .then(
        datacategories => dispatch(success(datacategories)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_CATEGORIES_REQUEST };
  }
  function success(datacategories) {
    return { type: routeConstants.GET_CATEGORIES_SUCCESS, datacategories };
  }
  function failure(error) {
    return { type: routeConstants.GET_CATEGORIES__FAILURE, error };
  }
}
