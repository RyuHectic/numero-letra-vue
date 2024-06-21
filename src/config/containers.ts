import { Container } from 'inversify'
import { TYPES } from 'src/config/types'
import { AxiosHttpAdapter, IHttpAdapter } from 'src/app/common/adapters'
import { IUserRepository, GetUsers, UserRepository } from 'src/app/core/users'
import { GetLog, ILogRepository, LogRepository } from 'src/app/core/logs'

const container = new Container()

container.bind<IHttpAdapter>(TYPES.IHttpAdapter).to(AxiosHttpAdapter)

container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository)
container.bind<GetUsers>(TYPES.GetUsers).to(GetUsers)

container.bind<ILogRepository>(TYPES.ILogRepository).to(LogRepository)
container.bind<GetLog>(TYPES.GetLog).to(GetLog)

export { container }
