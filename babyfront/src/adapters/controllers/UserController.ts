import User from "@/entities/User";
import { ListAllUsersUseCaseImpl, SaveUserUseCaseImpl } from "@/main/useCaseFactory";
import SaveUserResponseModel from "@/usecases/SaveUser/SaveUserDTO";
//import { UserServiceUseCase } from "@/usecases/UserService/UserServiceUseCase";

export default class UserController {
    public static async save(user: User, presenter: Function) {        
        const Response: SaveUserResponseModel = await SaveUserUseCaseImpl.execute(user);
        presenter(Response);        
    }

    public static async getAllUsers(presenter: Function) {
        const Response = await ListAllUsersUseCaseImpl.execute();
        presenter(Response);
    }

    // public static async get(loginRequest: any, presenter: Function) {
    //     const Response: any = await GetOneUserCaseImpl.get(loginRequest);
    //     presenter(Response);
    //     return Response;

    // }
}