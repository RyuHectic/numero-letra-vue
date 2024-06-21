/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata'
import { IHttpAdapter } from './IHttpAdapter'
import axios, { AxiosInstance } from 'axios'
import { injectable } from 'inversify'
// import { TYPES } from 'src/config/types'
// import { ISessionInfo } from '../session/ISessionInfo'

@injectable()
export class AxiosHttpAdapter implements IHttpAdapter {
  private axiosInstance: AxiosInstance

  constructor() {
    axios.defaults.baseURL = 'http://localhost:5072'
    this.axiosInstance = axios.create()
  }

  // private _userSession: ISessionInfo
  // constructor(@inject(TYPES.ISessionInfo) private userSession:ISessionInfo) {
  //   axios.defaults.baseURL = 'https://dev-xapis.xperienciasxcaret.mx/payment-rules-admin'
  //   this._userSession = userSession

  //   axios.defaults.headers.common.Authorization = `Bearer ${userSession.getUserInfoToken()}`

  //   this.axiosInstance = axios.create()

  //   // HANDLE THE SESSION ACTIVE
  //   this.axiosInstance.interceptors.response.use(
  //     (res) => {
  //       return res
  //     },
  //     (error) => {
  //       if ([401, 419].includes(error.response.status)) {
  //         const redirectPath = window.location.pathname

  //         window.location.href = `/login?redirect=${encodeURIComponent(redirectPath)}`
  //       }

  //       return Promise.reject(error)
  //     }
  //   )
  // }

  async get<T = any>(url: string, config?: any): Promise<T> {
    if (config) {
      this.axiosInstance.defaults.headers.get = { ...config }
    }

    const response = await this.axiosInstance.get<T>(url)

    return response.data
  }

  async post<T = any>(url: string, payload: any, config?: any): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, payload)

    return response.data
  }

  async put<T = any>(url:string, payload: any, config?: any): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, payload)

    return response.data
  }

  async delete<T = any>(url:string, config?: any): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, { data: config })

    return response.data
  }
}
