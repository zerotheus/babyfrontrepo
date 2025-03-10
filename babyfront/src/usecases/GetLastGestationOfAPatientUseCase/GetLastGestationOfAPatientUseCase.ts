export default class GetLastGestationOfAPatientUseCase {

    constructor(private getLastGestationOfAPatientUseCaseImpl:any) {}

    public async execute(pregnantId:string){
        return this.getLastGestationOfAPatientUseCaseImpl.execute(pregnantId)
    }

}