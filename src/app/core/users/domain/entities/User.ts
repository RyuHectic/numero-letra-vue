export interface IUser {
  idUser: number
  strName: string
  strLastName: string
  bitActive: boolean
}

export interface User extends IUser {
  fxCompleteName: string
  strUser: string
  strPassword: string
}
