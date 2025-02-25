import { BASE_URL, PORT } from "@/config";
import HttpClient from "@/usecases/ports/http/HttpCliente";

export default class HttpListAllFetalRegister{
    constructor(private httpClient:HttpClient){}
    
    async execute() :Promise<any>{
        return await this.httpClient.get(`${BASE_URL}:${PORT}/patient/listall`)
    }
}