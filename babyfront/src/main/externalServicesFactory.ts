import HttpListAllDoctors from '@/adapters/gateways/HttpListAllDoctors';
import HttpLogin from '../adapters/gateways/HttpLogin'
import { HttpClientImpl } from './httpFactory'
import HttpMaternalDataOfApregnant from '@/adapters/gateways/HttpMaternalDataOfAPregnant';

const LoginImpl = new HttpLogin(HttpClientImpl)
const ListAllDoctorsImpl: HttpListAllDoctors = new HttpListAllDoctors(HttpClientImpl);
const ListAllMaternalData: HttpMaternalDataOfApregnant = new HttpMaternalDataOfApregnant(HttpClientImpl)



export { LoginImpl, ListAllDoctorsImpl,ListAllMaternalData }
