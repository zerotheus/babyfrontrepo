import { LoginRequestModel, LoginResponseModel } from "../../Login/LoginDTO";

export default interface Login {
  execute(data: LoginRequestModel): Promise<LoginResponseModel>
}
