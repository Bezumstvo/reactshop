import { routeConstants } from '../_constants';
import { resultsService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const resultsActions = {
    getTable,
    getTable1,
    getTable2
};
function getTable(params) {
    return dispatch => {
        dispatch(request());

        resultsService.getTable(params)
            .then(
                results => dispatch(success(results)),
                error => dispatch(failure(error))
            );
    };
    function request() { return { type: routeConstants.GET_TABLE_REQUEST } }
    function success(datatable) { return { type: routeConstants.GET_TABLE_SUCCESS, datatable } }
    function failure(error) { return { type: routeConstants.GET_TABLE_FAILURE, error } }
}

function getTable1(params) {
    return dispatch => {
        dispatch(request());

        resultsService.getTable1(params)
            .then(
                results => dispatch(success(results)),
                error => dispatch(failure(error))
            );
    };
    function request() { return { type: routeConstants.GET_TABLE_REQUEST } }
    function success(datatable) { return { type: routeConstants.GET_TABLE_SUCCESS, datatable } }
    function failure(error) { return { type: routeConstants.GET_TABLE_FAILURE, error } }
}

function getTable2(params) {
    return dispatch => {
        dispatch(request());

        resultsService.getTable2(params)
            .then(
                results => dispatch(success(results)),
                error => dispatch(failure(error))
            );
    };
    function request() { return { type: routeConstants.GET_TABLE_REQUEST } }
    function success(datatable) { return { type: routeConstants.GET_TABLE_SUCCESS, datatable } }
    function failure(error) { return { type: routeConstants.GET_TABLE_FAILURE, error } }
}
