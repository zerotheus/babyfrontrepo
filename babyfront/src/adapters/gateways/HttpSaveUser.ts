import { BASE_URL, PORT } from "@/config";
import User from "@/entities/User";
import UserService from "@/usecases/ports/externalService/UserService";

import HttpClient from "@/usecases/ports/http/HttpCliente";
import UserServiceResponseModel from "@/usecases/SaveUser/SaveUserDTO";

export default class  HttpUserService implements UserService {
    constructor(private HttpClient: HttpClient) {}

    async save(user: User): Promise<UserServiceResponseModel> {        
        let Result: any;        
        console.log("json?: " + typeof user);
        try {
            Result = await this.HttpClient.post(`${BASE_URL}:${PORT}/user/save`, {...user});
            console.log("HttpUserService | Result: " + Result);
        }
        catch (error: any) {
            console.error("Error rota | HttpUserService: " + error);
        }
        finally {
            return Result as UserServiceResponseModel;
        }
    }
}