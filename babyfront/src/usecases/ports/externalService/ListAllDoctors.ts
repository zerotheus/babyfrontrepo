import { ListAllDoctorsResponse } from "@/usecases/ListAllDoctorUseCaseImpl/ListAllDoctorsDto";

export default interface ListAllDoctor {
    List(): Promise<ListAllDoctorsResponse>;
}