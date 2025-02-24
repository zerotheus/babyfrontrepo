import ListAllDoctorsUseCase from "@/usecases/ListAllDoctorUseCaseImpl/ListAllDoctorsUseCase";
import LoginUseCase from "../usecases/Login/LoginUseCase"
import { ListAllDoctorsImpl, LoginImpl,MaternalDataOfApregnantImpl,ListAllFetalRegisterImpl,ListAllGlicoseRegisterImpl, GetOnePregnantDataImpl } from "./externalServicesFactory"
import MaternalDataOfApregnant from "@/usecases/ListMaternalDataOfAPregnant/MaternalDataOfAPregnant";
import ListAllFetalRegister from "@/usecases/ListAllFetalRegister/ListAllFetalRegister";
import ListAllGlicoseUseCase from "@/usecases/ListAllGlicoseRegister/ListAllGlicoseUseCase";
import GetOnePregnantUseCase from "@/usecases/GetOnePregnantUseCase/GetOnePregnantUseCase";

const LoginUseCaseImpl = new LoginUseCase(LoginImpl)
const ListAllDoctorUseCaseImpl = new ListAllDoctorsUseCase(ListAllDoctorsImpl);
const MaternalDataOfApregnantUseCaseImpl = new MaternalDataOfApregnant(MaternalDataOfApregnantImpl);
const ListAllFetalRegisterUseCaseImpl = new ListAllFetalRegister(ListAllFetalRegisterImpl)
const ListAllGlicoseUsecaseImpl = new ListAllGlicoseUseCase(ListAllGlicoseRegisterImpl)
const GetOnePregnantUseCaseImpl = new GetOnePregnantUseCase(GetOnePregnantDataImpl)


export { LoginUseCaseImpl,ListAllDoctorUseCaseImpl,MaternalDataOfApregnantUseCaseImpl,ListAllFetalRegisterUseCaseImpl,ListAllGlicoseUsecaseImpl,GetOnePregnantUseCaseImpl }
