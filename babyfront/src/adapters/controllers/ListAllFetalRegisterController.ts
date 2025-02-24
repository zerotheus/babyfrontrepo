import { ListAllFetalRegisterUseCaseImpl } from "@/main/useCaseFactory";

export default class ListAllFetalRegisterController {
    public static async getData(id:string,presenter:Function){
        return ListAllFetalRegisterUseCaseImpl.execute(id);
    }
}