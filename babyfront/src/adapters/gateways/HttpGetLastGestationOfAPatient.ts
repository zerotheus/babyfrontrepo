import { BASE_URL, PORT } from "@/config";
import HttpClient from "@/usecases/ports/http/HttpCliente";

export default class HttpGetLastGestationOfAPatient{
    constructor(private httpClient:HttpClient){}
    //TODO sim é da pregnantId, está errado no endpoint 
    async execute(pregnantId:string) :Promise<[]>{
        return await this.httpClient.get(`${BASE_URL}:${PORT}/gestation/last?userID=${pregnantId}`)
    }
}