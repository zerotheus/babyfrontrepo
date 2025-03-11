import { BASE_URL, PORT } from "@/config";
import HttpClient from "@/usecases/ports/http/HttpCliente";

export default class HttpAssociatePregnant {
    constructor(private httpClient: HttpClient) { }

    async execute(doctorId: string, pregnantId: string, update: boolean): Promise<[]> {
        return await this.httpClient.post(`${BASE_URL}:${PORT}/doctor/saveaccompanying`, {
            doctorID: doctorId, gestationID: pregnantId, update
        })
    }
}