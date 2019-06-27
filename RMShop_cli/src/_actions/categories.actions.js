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
        datatable => dispatch(success(datatable)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_TABLE_REQUEST };
  }
  function success(datatable) {
    return { type: routeConstants.GET_TABLE_SUCCESS, datatable };
  }
  function failure(error) {
    return { type: routeConstants.GET_TABLE__FAILURE, error };
  }
}

function add(params) {
  return dispatch => {
    categoriesService
      .add(params)
      .then(
        datatable => dispatch(success(datatable)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_TABLE_REQUEST };
  }
  function success(datatable) {
    return { type: routeConstants.GET_TABLE_SUCCESS, datatable };
  }
  function failure(error) {
    return { type: routeConstants.GET_TABLE__FAILURE, error };
  }
}

function update(params) {
  return dispatch => {
    categoriesService
      .update(params)
      .then(
        datatable => dispatch(success(datatable)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_TABLE_REQUEST };
  }
  function success(datatable) {
    return { type: routeConstants.GET_TABLE_SUCCESS, datatable };
  }
  function failure(error) {
    return { type: routeConstants.GET_TABLE__FAILURE, error };
  }
}

function remove(params) {
  return dispatch => {
    categoriesService
      .remove(params)
      .then(
        datatable => dispatch(success(datatable)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_TABLE_REQUEST };
  }
  function success(datatable) {
    return { type: routeConstants.GET_TABLE_SUCCESS, datatable };
  }
  function failure(error) {
    return { type: routeConstants.GET_TABLE__FAILURE, error };
  }
}
