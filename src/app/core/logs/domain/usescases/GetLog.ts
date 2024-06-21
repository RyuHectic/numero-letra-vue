import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import { TYPES } from 'src/config/types'
import { ILogDTO, ILogRepository, ILogResponse } from '../../interfaces'

@injectable()
export class GetLog {
  private _userRepository: ILogRepository

  constructor(@inject(TYPES.ILogRepository) private userRepository: ILogRepository) {
    this._userRepository = userRepository
  }

  async fetchLog(): Promise<ILogResponse[]> {
    return await this._userRepository.getLog()
  }

  async postLog(payload: ILogDTO): Promise<ILogResponse> {
    return await this._userRepository.postLog(payload)
  }
}
