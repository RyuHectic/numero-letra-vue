import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import { TYPES } from 'src/config/types'
import { ILoginResponse, IUserDTO, IUserRepository, IUserResponse } from '../../interfaces'
import { ILoginRequest } from '../entities'

@injectable()
export class GetUsers {
  private _userRepository: IUserRepository

  constructor(@inject(TYPES.IUserRepository) private userRepository: IUserRepository) {
    this._userRepository = userRepository
  }

  async fetchUsers(): Promise<IUserResponse[]> {
    return await this._userRepository.getUsers()
  }

  async postUser(payload: IUserDTO): Promise<IUserResponse> {
    return await this._userRepository.postUser(payload)
  }

  async putUser(payload: IUserDTO): Promise<IUserResponse> {
    return await this._userRepository.putUser(payload)
  }

  async deleteUserById(id: number): Promise<IUserResponse> {
    return await this._userRepository.deleteUserById(id)
  }

  async doLogin(payload: ILoginRequest): Promise<ILoginResponse> {
    return await this._userRepository.loginUser(payload)
  }
}
