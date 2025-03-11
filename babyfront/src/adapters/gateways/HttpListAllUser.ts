import { BASE_URL, PORT } from "@/config";
import HttpClient from "@/usecases/ports/http/HttpCliente";

export default class HttpListAllUser {
    constructor (private httpClient: HttpClient) {}
    async execute() {
        return await this.httpClient.get(`${BASE_URL}:${PORT}/user/listall`);
    }
}