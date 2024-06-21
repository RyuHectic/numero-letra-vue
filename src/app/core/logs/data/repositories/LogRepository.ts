import { injectable, inject } from 'inversify'
import { IHttpAdapter } from 'src/app/common/adapters'
import { TYPES } from 'src/config/types'
import { ILogDTO, ILogRepository, ILogResponse } from '../../interfaces'

@injectable()
export class LogRepository implements ILogRepository {
  private _httpAdapter: IHttpAdapter
  readonly url = '/log/'

  constructor(@inject(TYPES.IHttpAdapter) httpAdapter: IHttpAdapter) {
    this._httpAdapter = httpAdapter
  }

  async getLog(): Promise<ILogResponse[]> {
    return await this._httpAdapter.get(`${this.url}`)
  }

  async postLog(payload: ILogDTO): Promise<ILogResponse> {
    return await this._httpAdapter.post(`${this.url}insert`, payload)
  }
}
