import { ListAllPregnantUseCaseImpl } from "@/main/useCaseFactory";

export default class ListAllPregnantController {
    public static async getData(presenter:Function){
        return ListAllPregnantUseCaseImpl.execute();
    }
}