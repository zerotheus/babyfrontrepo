import LoginUseCase from "../usecases/Login/LoginUseCase"
import { LoginImpl } from "./externalServicesFactory"

const LoginUseCaseImpl = new LoginUseCase(LoginImpl)

export { LoginUseCaseImpl }
