import config from 'config';
import { authHeader } from '../_helpers';

export const resultsService = {
    getTable,
    getTable1,
    getTable2,
};
function getTable(calc_id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/results/getTable?calc_id=`+calc_id, requestOptions).then(handleResponse);
}
function getTable1(calc_id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/results/getTable1?calc_id=`+calc_id, requestOptions).then(handleResponse);
}
function getTable2(calc_id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/results/getTable2?calc_id=`+calc_id, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
