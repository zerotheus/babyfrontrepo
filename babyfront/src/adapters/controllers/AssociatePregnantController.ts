import { AssociatePregnantUseCaseImpl } from "@/main/useCaseFactory";

export default class AssociatePregnantController {
    public static async execute(doctorId: string, pregnantId: string, update: boolean, presenter: Function) {
        return AssociatePregnantUseCaseImpl.execute(doctorId, pregnantId, update);
    }
}