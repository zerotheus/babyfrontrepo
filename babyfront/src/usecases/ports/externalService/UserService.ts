import User from "@/entities/User";
import SaveUserResponseModel from "@/usecases/SaveUser/SaveUserDTO";

export default interface UserService {
    save(user: User): Promise<SaveUserResponseModel>;
}