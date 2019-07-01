import config from "config";
import { authHeader } from "../_helpers";

export const filesService = {
  upload
};

function upload(values) {
  const requestOptions = {
    method: "POST",
    headers:{...authHeader(), "Accept": "*/*"},
    body: values
  };

  return fetch(`${config.apiUrl}/files/upload`, requestOptions).then(
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
