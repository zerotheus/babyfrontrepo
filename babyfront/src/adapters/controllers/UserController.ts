import User from "@/entities/User";
import { SaveUserUseCaseImpl } from "@/main/useCaseFactory";
import SaveUserResponseModel from "@/usecases/SaveUser/SaveUserDTO";
//import { UserServiceUseCase } from "@/usecases/UserService/UserServiceUseCase";

export default class UserController {
    public static async save(user: User, presenter: Function) {
        console.log("UserController | user: " + user);
        const Response: SaveUserResponseModel = await SaveUserUseCaseImpl.execute(user);
        presenter(Response);
        return null;
    }

    // public static async get(loginRequest: any, presenter: Function) {
    //     const Response: any = await GetOneUserCaseImpl.get(loginRequest);
    //     presenter(Response);
    //     return Response;

    // }
}