import User from "@/entities/User"
//import  SaveUser  from "../ports/externalService/SaveUser.ts";
//import SaveUserResponseModel from "./SaveUserDTO.ts";

export default class SaveUserUseCase {
    constructor(private SaveUserImpl: any) {}
    async execute(user: User) {
        alert("SaveUserUseCase | user: " + JSON.stringify(user));
        const Response = await this.SaveUserImpl.save(user);
        return Response;
    }
}