import { GetLastGestationOfAPatientUseCaseImpl } from "@/main/useCaseFactory";

export default class GetLastGestationOfAPatientController {
    public static async getData(pregnantId:string,presenter:Function){
        return GetLastGestationOfAPatientUseCaseImpl.execute(pregnantId);
    }
}