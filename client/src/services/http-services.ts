/** ***************************************************************************
 * @About - this contains all the top level http-request methods
 * (GET, POST, PUT, PATCH, DELETE, and ....)
 * @Usage - all you need is to build a Facade that communicates with
 * this service for more: check the /services/httpServices.test.js
 * @important - For Mutational requests e.g: POST, PATCH, PUT, we are making
 * data argument optional because user can decide to send URL_ENCODED data
 * i.e the endpoint url from frontend will be an encoded queryParam which
 * the backend decodes and restructure to what Backend understands
 * */
import axios, { AxiosRequestHeaders } from 'axios';

type HttpRequest = {
  endpointSuffix: string;
  headers?: AxiosRequestHeaders;
};

const CLIENT = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/',
});

function composeHeaders() {
  const token = '<get_from_cookies>';

  return (theirHeaders?: AxiosRequestHeaders) => ({
    'Content-Type': 'application/json',
    ...theirHeaders,
    Authorization: `Bearer ${token}`,
  });
}

interface HttpGetRequestArgs extends HttpRequest {}

async function httpGetRequest(args: HttpGetRequestArgs) {
  const composedHeaders = composeHeaders();
  return await CLIENT({
    method: 'GET',
    url: args.endpointSuffix,
    headers: composedHeaders(args.headers ?? {}),
  });
}

interface HttpSendRequestArgs<DataType> extends HttpRequest {
  data?: DataType;
  method: 'POST' | 'PUT' | 'PATCH';
}

async function httpSendRequest<DataType>(args: HttpSendRequestArgs<DataType>) {
  const composedHeaders = composeHeaders();
  return await CLIENT({
    method: args.method,
    url: args.endpointSuffix,
    headers: composedHeaders(args.headers ?? {}),
    ...{ data: args.data ?? {} },
  });
}

interface HttpDeleteRequestArgs extends HttpRequest {}

async function httpDeleteRequest(args: HttpDeleteRequestArgs) {
  const composedHeaders = composeHeaders();
  return await CLIENT({
    method: 'DELETE',
    url: args.endpointSuffix,
    headers: composedHeaders(args.headers ?? {}),
  });
}

export { httpGetRequest, httpSendRequest, httpDeleteRequest };
