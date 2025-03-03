import { ListAllPregnantUseCaseImpl } from "@/main/useCaseFactory";

export default class ListAllPregnantController {
    public static async getData(presenter: Function) {
        const response = await ListAllPregnantUseCaseImpl.execute();

        await presenter(response.ListAllPatient);
        return response.ListAllPatient
    }
}