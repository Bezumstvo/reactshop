import config from "config";
import { authHeader } from "../_helpers";

export const departmentsService = {
  getAll,
  add,
  update,
  remove
};

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };
  return fetch(`${config.apiUrl}/departments`, requestOptions).then(
    handleResponse
  );
}

function add(values) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(values)
  };
  return fetch(`${config.apiUrl}/departments/add`, requestOptions).then(
    handleResponse
  );
}

function update(values) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(values)
  };
  return fetch(`${config.apiUrl}/departments/update`, requestOptions).then(
    handleResponse
  );
}

function remove(values) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(values)
  };
  return fetch(`${config.apiUrl}/departments/remove`, requestOptions).then(
    handleResponse
  );
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
