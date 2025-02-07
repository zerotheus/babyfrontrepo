import Doctor from "../../entities/Doctor";
import { DataType } from "../../util/Properties";

interface ListAllDoctorsResponse {
    ListDoctors: DataType<Doctor>[];
}

export type {
    ListAllDoctorsResponse
}