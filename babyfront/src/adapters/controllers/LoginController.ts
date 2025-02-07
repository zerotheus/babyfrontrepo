import { LoginUseCaseImpl } from "../../main/useCaseFactory"
import { LoginResponseModel } from "../../usecases/Login/LoginDTO"

export default class LoginController {
  public static async login(data: any, presenter: Function) {
    const response: LoginResponseModel = await LoginUseCaseImpl.execute(data)
    let status: number
    if (response.user && response.user.uuid) {
      status = 4 // There is all register
      if (!response.accesstoken || !response.refreshtoken) {
        status = 1 // There is no generated token
      } else if (!response.gestation || !response.gestation.gestationID) {
        status = 2 // There is no gestation
      } else if (!response.doctor || !response.doctor.doctorID) {
        status = 3 // There is no doctor
      }
    } else {
      status = 0 // There is no user with login data or password data is wrong
    }

    const ViewModel = {
      status,
      userID: response.user?.uuid,
      patientID: response.user?.uuid,
      gestationID: response.gestation?.gestationID,
      doctorID: response.doctor?.doctorID,
      userImage: response.user?.image,
      userName: response.user?.name,
      userData: response.user,
      gestationData: response.gestation,
      doctorData: response.doctor,
    }
    presenter(ViewModel)
    return response
  }
}
