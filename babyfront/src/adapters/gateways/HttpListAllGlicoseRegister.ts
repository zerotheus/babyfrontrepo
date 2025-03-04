import { BASE_URL, PORT } from "@/config";
import HttpClient from "@/usecases/ports/http/HttpCliente";

export default class HttpListAllGlicoseRegister{
    constructor(private httpClient:HttpClient){}
    
    async execute(id:string) :Promise<[]>{
        console.log(id)
        return await this.httpClient.get(`${BASE_URL}:${PORT}/bloodglucoseregister/listall?gestationID=${id}`)
    }
}