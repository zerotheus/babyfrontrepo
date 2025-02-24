import { ListAllGlicoseUsecaseImpl } from "@/main/useCaseFactory";

export default class ListAllGlicoseRegisterController {
    public static async getData(id:string,presenter:Function){
        return ListAllGlicoseUsecaseImpl.execute(id);
    }
}