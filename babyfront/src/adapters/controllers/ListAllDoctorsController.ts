import { ListAllDoctorUseCaseImpl } from "@/main/useCaseFactory";


export default class ListAllDoctorsController {
    public static async list(presenter: Function) {
        const response = await ListAllDoctorUseCaseImpl.execute();
        await presenter(response);
        return response;
    }
}