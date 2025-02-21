import ListAllDoctorsUseCase from "@/usecases/ListAllDoctorUseCaseImpl/ListAllDoctorsUseCase";
import LoginUseCase from "../usecases/Login/LoginUseCase"
import { ListAllDoctorsImpl, LoginImpl,ListAllMaternalData } from "./externalServicesFactory"
import MaternalDataOfApregnant from "@/usecases/ListMaternalDataOfAPregnant/MaternalDataOfAPregnant";

const LoginUseCaseImpl = new LoginUseCase(LoginImpl)
const ListAllDoctorUseCaseImpl = new ListAllDoctorsUseCase(ListAllDoctorsImpl);
const MaternalDataOfApregnantImpl = new MaternalDataOfApregnant(ListAllMaternalData);


export { LoginUseCaseImpl,ListAllDoctorUseCaseImpl,MaternalDataOfApregnantImpl }
