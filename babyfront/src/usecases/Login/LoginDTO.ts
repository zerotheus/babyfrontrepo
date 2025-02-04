import Doctor from "../../entities/Doctor";
import Gestation from "../../entities/Gestation";
import User from "../../entities/User";
import { DataType } from "../../util/Properties";

interface LoginRequestModel {
    login: string,
    password: string
}

interface LoginResponseModel {
    user: DataType<User>,
    gestation: DataType<Gestation>,
    doctor: DataType<Doctor>,
    accesstoken: string,
    refreshtoken: string
}

export type {
    LoginRequestModel,
    LoginResponseModel
}