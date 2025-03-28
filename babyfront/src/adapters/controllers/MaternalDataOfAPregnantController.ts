import { MaternalDataOfApregnantUseCaseImpl } from "@/main/useCaseFactory";

export default class MaternalDataOfApregnantController {
    public static async getData(id:string,presenter:Function){
        return MaternalDataOfApregnantUseCaseImpl.execute(id);
    }
}