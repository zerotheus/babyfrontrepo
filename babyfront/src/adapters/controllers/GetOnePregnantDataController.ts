import { GetOnePregnantUseCaseImpl } from "@/main/useCaseFactory";

export default class GetOnePregnantDataController {
    public static async getData(id:string,presenter:Function){
        return GetOnePregnantUseCaseImpl.execute(id);
    }
}