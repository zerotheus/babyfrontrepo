import { BASE_URL, PORT } from "@/config";
import HttpClient from "@/usecases/ports/http/HttpCliente";

export default class HttpGetOnePregnantData{
    constructor(private httpClient:HttpClient){}
    
    async execute(id:string) :Promise<[]>{
        return await this.httpClient.get(`${BASE_URL}:${PORT}/pregnantdata/pregnantPatient/?gestationID=${id}`)
    }
}