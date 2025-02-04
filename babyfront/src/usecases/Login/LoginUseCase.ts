import { LoginRequestModel } from './LoginDTO'

export default class LoginUseCase {
  constructor(private externalLoginUseCaseImpl: any) {}

  async execute(login: LoginRequestModel) {
    const response = this.externalLoginUseCaseImpl.execute(login)
    return response
  }
}
