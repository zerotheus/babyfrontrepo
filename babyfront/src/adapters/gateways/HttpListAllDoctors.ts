import { BASE_URL, PORT } from "@/config";
import { ListAllDoctorsResponse } from "@/usecases/ListAllDoctorUseCaseImpl/ListAllDoctorsDto";
import ListAllDoctor from "@/usecases/ports/externalService/ListAllDoctors";
import HttpClient from "@/usecases/ports/http/HttpCliente";

export default class HttpListAllDoctors implements ListAllDoctor {
    constructor (private HttpClientImpl: HttpClient) {}

    async List(): Promise<ListAllDoctorsResponse> {
        const result: any = await this.HttpClientImpl.get(`${BASE_URL}:${PORT}/doctor/listall`);
        return result;
    }
}