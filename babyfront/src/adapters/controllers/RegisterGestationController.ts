import Gestation from "@/entities/Gestation";
import { RegisterGestationUseCaseImpl } from "@/main/useCaseFactory";

export default class RegistrationGestationController {
    public static async save(gestationData: any, presenter: Function) {
        const response = await RegisterGestationUseCaseImpl.execute(gestationData);
        await presenter(response);
    }
}