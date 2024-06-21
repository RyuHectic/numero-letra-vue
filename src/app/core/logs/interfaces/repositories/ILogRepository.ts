import { ILogDTO } from './ILogDTO'
import { ILogResponse } from './ILogResponse'

export interface ILogRepository {
  getLog(): Promise<ILogResponse[]>
  postLog(payload: ILogDTO): Promise<ILogResponse>;
}
