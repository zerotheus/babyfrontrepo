import { BASE_URL, PORT } from "@/config";
import Gestation from "@/entities/Gestation";
import HttpClient from "@/usecases/ports/http/HttpCliente";

export default class HttpRegisterGestation {
    constructor (private httpClient: HttpClient) {}

    async execute(gestationData: any): Promise<any> {
        let result: any;
        try {
            result = await this.httpClient.post(`${BASE_URL}:${PORT}/gestation/save`, gestationData);
            return result
        } catch (error: any) {
            console.error("HttpRegisterGestation: " + error);
            return result;
        }
    }
}