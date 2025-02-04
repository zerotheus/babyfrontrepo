import HttpLogin from '../adapters/gateways/HttpLogin'
import { HttpClientImpl } from './httpFactory'

const LoginImpl = new HttpLogin(HttpClientImpl)

export { LoginImpl }
