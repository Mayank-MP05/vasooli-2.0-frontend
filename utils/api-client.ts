import axios from "axios";
import type { AxiosResponse } from "axios";
const API_ENDPOINT = "http://localhost:8000";
const APIClient = ({
  route = "/",
  headers = {},
  payload = {},
  method = "POST",
  successFn = () => {},
  errorFn = () => {},
  finallyFn = () => {},
}) => {
  axios({
    method,
    url: `${API_ENDPOINT}${route}`,
    data: payload,
    timeout: 30000,
    headers: {
      Accept: "application/json",
      ...headers,
    },
  })
    .then(function (response: AxiosResponse) {
      console.log(
        `%c ${method} `,
        "background: green;color:white",
        `${route} - Response: `,
        response.data
      );
      successFn(response.data);
    })
    .catch((err) => {
      console.log(
        `%c ${method} `,
        "background: red;color:white",
        `${route} - Error: `,
        err
      );
      errorFn(err);
    })
    .finally(() => {
      if (finallyFn) finallyFn();
    });
};

export default APIClient;
