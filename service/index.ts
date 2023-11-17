import type { AsyncData, UseFetchOptions } from "nuxt/app";
// import { baseURL } from "nuxt/dist/core/runtime/nitro/paths";
type Methods = "GET" | "POST";
const BASE_URL = "HTTP://codercba.com:9060/oppo-nuxt/api";
// const BASE_URL1 = "HTTP://codercba.com:9060/juanpi/api";
export interface IResultData<T> {
  code: number;
  data: T;
}
class MyRequest {
  request<T = any>(
    url: string,
    method: Methods,
    data?: any,
    options?: UseFetchOptions<T>
  ): Promise<AsyncData<T, Error>> {
    return new Promise((resolve, reject) => {
      const newOptions: UseFetchOptions<T> = {
        baseURL: BASE_URL,
        method: method,
        ...options,
      };

      if (method === "GET") {
        newOptions.params = data;
      }
      if (method === "POST") {
        newOptions.body = data;
      }
      useFetch(url, newOptions)
        .then((res) => {
          // console.log(newOptions.baseURL);
          resolve(res as AsyncData<T, Error>);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  get<T = any>(url: string, data?: any, options?: UseFetchOptions<T>) {
    return this.request<T>(url, "GET", data, options);
  }
  post<T = any>(url: string, data?: any, options?: UseFetchOptions<T>) {
    return this.request<T>(url, "POST", data, options);
  }
}
export default new MyRequest();
