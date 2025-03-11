import ListAllDoctorsUseCase from "@/usecases/ListAllDoctorUseCaseImpl/ListAllDoctorsUseCase";
import LoginUseCase from "../usecases/Login/LoginUseCase"
import { ListAllDoctorsImpl, LoginImpl,MaternalDataOfApregnantImpl,ListAllFetalRegisterImpl,ListAllGlicoseRegisterImpl, GetOnePregnantDataImpl, ListAllPregnantImpl, AssociatePregnantImpl, SaveUserImpl, GetLastGestationOfAPatientImpl, ListAllUsersImpl } from "./externalServicesFactory"
import MaternalDataOfApregnant from "@/usecases/ListMaternalDataOfAPregnant/MaternalDataOfAPregnant";
import ListAllFetalRegister from "@/usecases/ListAllFetalRegister/ListAllFetalRegister";
import ListAllGlicoseUseCase from "@/usecases/ListAllGlicoseRegister/ListAllGlicoseUseCase";
import GetOnePregnantUseCase from "@/usecases/GetOnePregnantUseCase/GetOnePregnantUseCase";
import ListAllPregnantUseCase from "@/usecases/ListAllPregnantUseCase/LIstAllPregnantUseCase";
import AssociatePregnantUseCase from "@/usecases/associatePregnant/AssociatePregnantUseCase";
import SaveUserUseCase from "@/usecases/SaveUser/SaveUserUseCase";
import GetLastGestationOfAPatientUseCase from "@/usecases/GetLastGestationOfAPatientUseCase/GetLastGestationOfAPatientUseCase";
import ListAllUsersUseCase from "@/usecases/ListAllUser/ListAllUsersUseCase";


const LoginUseCaseImpl = new LoginUseCase(LoginImpl)
const ListAllDoctorUseCaseImpl = new ListAllDoctorsUseCase(ListAllDoctorsImpl);
const MaternalDataOfApregnantUseCaseImpl = new MaternalDataOfApregnant(MaternalDataOfApregnantImpl);
const ListAllFetalRegisterUseCaseImpl = new ListAllFetalRegister(ListAllFetalRegisterImpl)
const ListAllGlicoseUsecaseImpl = new ListAllGlicoseUseCase(ListAllGlicoseRegisterImpl)
const GetOnePregnantUseCaseImpl = new GetOnePregnantUseCase(GetOnePregnantDataImpl)
const ListAllPregnantUseCaseImpl = new ListAllPregnantUseCase(ListAllPregnantImpl)
const AssociatePregnantUseCaseImpl = new AssociatePregnantUseCase(AssociatePregnantImpl);
const SaveUserUseCaseImpl = new SaveUserUseCase(SaveUserImpl)
const GetLastGestationOfAPatientUseCaseImpl:GetLastGestationOfAPatientUseCase = new GetLastGestationOfAPatientUseCase(GetLastGestationOfAPatientImpl)
const ListAllUsersUseCaseImpl: ListAllUsersUseCase = new ListAllUsersUseCase(ListAllUsersImpl);

export { 
    LoginUseCaseImpl,
    ListAllDoctorUseCaseImpl,
    MaternalDataOfApregnantUseCaseImpl,
    ListAllFetalRegisterUseCaseImpl,
    ListAllGlicoseUsecaseImpl,
    GetOnePregnantUseCaseImpl,
    ListAllPregnantUseCaseImpl,
    AssociatePregnantUseCaseImpl,
    SaveUserUseCaseImpl,
    GetLastGestationOfAPatientUseCaseImpl,
    ListAllUsersUseCaseImpl
}
