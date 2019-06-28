import { routeConstants } from "../_constants";
import { departmentsService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const departmentsActions = {
  getAll,
  add,
  update,
  remove
};

function getAll(params) {
  return dispatch => {
    departmentsService
      .getAll(params)
      .then(
        datadepartments => dispatch(success(datadepartments)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_DEPARTMENTS_REQUEST };
  }
  function success(datadepartments) {
    return { type: routeConstants.GET_DEPARTMENTS_SUCCESS, datadepartments };
  }
  function failure(error) {
    return { type: routeConstants.GET_DEPARTMENTS__FAILURE, error };
  }
}

function add(params) {
  return dispatch => {
    departmentsService
      .add(params)
      .then(
        datadepartments => dispatch(success(datadepartments)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_DEPARTMENTS_REQUEST };
  }
  function success(datadepartments) {
    return { type: routeConstants.GET_DEPARTMENTS_SUCCESS, datadepartments };
  }
  function failure(error) {
    return { type: routeConstants.GET_DEPARTMENTS__FAILURE, error };
  }
}

function update(params) {
  return dispatch => {
    departmentsService
      .update(params)
      .then(
        datadepartments => dispatch(success(datadepartments)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_DEPARTMENTS_REQUEST };
  }
  function success(datadepartments) {
    return { type: routeConstants.GET_DEPARTMENTS_SUCCESS, datadepartments };
  }
  function failure(error) {
    return { type: routeConstants.GET_DEPARTMENTS__FAILURE, error };
  }
}

function remove(params) {
  return dispatch => {
    departmentsService
      .remove(params)
      .then(
        datadepartments => dispatch(success(datadepartments)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_DEPARTMENTS_REQUEST };
  }
  function success(datadepartments) {
    return { type: routeConstants.GET_DEPARTMENTS_SUCCESS, datadepartments };
  }
  function failure(error) {
    return { type: routeConstants.GET_DEPARTMENTS__FAILURE, error };
  }
}
