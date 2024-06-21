/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IHttpAdapter {
  get<T = any>(url: string, config?: any): Promise<T>;
  post<T = any>(url: string, params: any): Promise<T>;
  put<T = any>(url:string, payload?: any, config?: any): Promise<T>;
  delete<T = any>(url:string, payload?: any): Promise<T>;
}
