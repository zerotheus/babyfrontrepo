import HttpListAllDoctors from '@/adapters/gateways/HttpListAllDoctors';
import HttpLogin from '../adapters/gateways/HttpLogin'
import { HttpClientImpl } from './httpFactory'
import HttpMaternalDataOfApregnant from '@/adapters/gateways/HttpMaternalDataOfAPregnant';
import HttpListAllFetalRegister from '@/adapters/gateways/HttpListAllFetalRegister';
import HttpListAllGlicoseRegister from '@/adapters/gateways/HttpListAllGlicoseRegister';

const LoginImpl = new HttpLogin(HttpClientImpl)
const ListAllDoctorsImpl: HttpListAllDoctors = new HttpListAllDoctors(HttpClientImpl);
const MaternalDataOfApregnantImpl:HttpMaternalDataOfApregnant = new HttpMaternalDataOfApregnant(HttpClientImpl)
const ListAllFetalRegisterImpl:HttpListAllFetalRegister = new HttpListAllFetalRegister(HttpClientImpl);
const ListAllGlicoseRegisterImpl:HttpListAllGlicoseRegister = new HttpListAllGlicoseRegister(HttpClientImpl);


export { LoginImpl, ListAllDoctorsImpl,MaternalDataOfApregnantImpl,ListAllFetalRegisterImpl,ListAllGlicoseRegisterImpl }
