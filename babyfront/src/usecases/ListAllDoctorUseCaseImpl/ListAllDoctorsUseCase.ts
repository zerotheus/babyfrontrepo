import ListAllDoctor from "../ports/externalService/ListAllDoctors";
import { ListAllDoctorsResponse } from "./ListAllDoctorsDto";

export default class ListAllDoctorsUseCase  {
    constructor (private ListAllDoctors: ListAllDoctor) {}
    async execute(): Promise<ListAllDoctorsResponse> {
        return await this.ListAllDoctors.List();
    }
}