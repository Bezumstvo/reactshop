import { routeConstants } from "../_constants";
import { filesService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const filesActions = {
  upload
};

function upload(params) {
  return dispatch => {
    filesService
      .upload(params)
      .then(
        datafiles => dispatch(success(datafiles)),
        error => dispatch(failure(error))
      );
  };
  function request() {
    return { type: routeConstants.GET_FILES_REQUEST };
  }
  function success(datafiles) {
    return { type: routeConstants.GET_FILES_SUCCESS, datafiles };
  }
  function failure(error) {
    return { type: routeConstants.GET_FILES__FAILURE, error };
  }
}
