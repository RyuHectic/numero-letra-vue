import { injectable, inject } from 'inversify'
import { ILoginResponse, IUserDTO, IUserRepository, IUserResponse } from '../../interfaces'
import { IHttpAdapter } from 'src/app/common/adapters'
import { TYPES } from 'src/config/types'
import { ILoginRequest } from '../../domain'

@injectable()
export class UserRepository implements IUserRepository {
  private _httpAdapter: IHttpAdapter
  readonly url = '/users/'

  constructor(@inject(TYPES.IHttpAdapter) httpAdapter: IHttpAdapter) {
    this._httpAdapter = httpAdapter
  }

  async getUsers(): Promise<IUserResponse[]> {
    return await this._httpAdapter.get(`${this.url}`)
  }

  async postUser(payload: IUserDTO): Promise<IUserResponse> {
    return await this._httpAdapter.post(`${this.url}insert`, payload)
  }

  async putUser(payload:IUserDTO): Promise<IUserResponse> {
    return await this._httpAdapter.put(`${this.url}update`, payload)
  }

  async deleteUserById(id: number): Promise<IUserResponse> {
    return await this._httpAdapter.delete(`${this.url}delete/${id}`)
  }

  async loginUser(payload: ILoginRequest): Promise<ILoginResponse> {
    return await this._httpAdapter.post(`/AuthUser/`, payload)
  }
}
