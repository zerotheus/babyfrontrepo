import { BASE_URL, PORT } from '../../config'
import { LoginRequestModel, LoginResponseModel } from '../../usecases/Login/LoginDTO'
import Login from '../../usecases/ports/externalService/Login'
import HttpClient from '../../usecases/ports/http/HttpCliente'

export default class HttpLogin implements Login {
  constructor(private HttpClientImpl: HttpClient) {}
  async execute(data: LoginRequestModel): Promise<LoginResponseModel> {
    console.log(Object.keys(data))
    let result: any
    try {
      result = await this.HttpClientImpl.post(`${BASE_URL}:${PORT}/login/authentication`, {
        ...data,
      })
    } catch (e) {
    } finally {
      return result as LoginResponseModel
    }
  }
}
