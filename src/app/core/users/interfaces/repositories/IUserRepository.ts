import { ILoginRequest } from '../../domain'
import { ILoginResponse } from './ILoginResponse'
import { IUserDTO } from './IUserDTO'
import { IUserResponse } from './IUserResponse'

export interface IUserRepository {
  getUsers(): Promise<IUserResponse[]>
  postUser(payload: IUserDTO): Promise<IUserResponse>;
  putUser(payload: IUserDTO): Promise<IUserResponse>;
  deleteUserById(id: number): Promise<IUserResponse>;
  loginUser(payload: ILoginRequest): Promise<ILoginResponse>;
}
