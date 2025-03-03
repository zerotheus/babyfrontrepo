import { AssociatePregnantUseCaseImpl } from "@/main/useCaseFactory";

export default class AssociatePregnantController {
    public static async getData(doctorId:string,pregnantId:string,presenter:Function){
        return AssociatePregnantUseCaseImpl.execute(doctorId,pregnantId);
    }
}