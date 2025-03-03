import HttpListAllDoctors from '@/adapters/gateways/HttpListAllDoctors';
import HttpLogin from '../adapters/gateways/HttpLogin'
import { HttpClientImpl } from './httpFactory'
import HttpMaternalDataOfApregnant from '@/adapters/gateways/HttpMaternalDataOfAPregnant';
import HttpListAllFetalRegister from '@/adapters/gateways/HttpListAllFetalRegister';
import HttpListAllGlicoseRegister from '@/adapters/gateways/HttpListAllGlicoseRegister';
import HttpGetOnePregnantData from '@/adapters/gateways/HttpGetOnePregnantData';
import HttpListAllPregnant from '@/adapters/gateways/HttpListAllPregnant';
import HttpAssociatePregnant from '@/adapters/gateways/HttpAssociatePregnant';

const LoginImpl = new HttpLogin(HttpClientImpl)
const ListAllDoctorsImpl: HttpListAllDoctors = new HttpListAllDoctors(HttpClientImpl);
const MaternalDataOfApregnantImpl:HttpMaternalDataOfApregnant = new HttpMaternalDataOfApregnant(HttpClientImpl)
const ListAllFetalRegisterImpl:HttpListAllFetalRegister = new HttpListAllFetalRegister(HttpClientImpl);
const ListAllGlicoseRegisterImpl:HttpListAllGlicoseRegister = new HttpListAllGlicoseRegister(HttpClientImpl);
const GetOnePregnantDataImpl:HttpGetOnePregnantData = new HttpGetOnePregnantData(HttpClientImpl)
const ListAllPregnantImpl:HttpListAllPregnant = new HttpListAllPregnant(HttpClientImpl) 
const AssociatePregnantImpl:HttpAssociatePregnant = new HttpAssociatePregnant(HttpClientImpl)


export { LoginImpl, ListAllDoctorsImpl,MaternalDataOfApregnantImpl,ListAllFetalRegisterImpl,ListAllGlicoseRegisterImpl,GetOnePregnantDataImpl,ListAllPregnantImpl,AssociatePregnantImpl }
