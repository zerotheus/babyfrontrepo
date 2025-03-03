export default class AssociatePregnantUseCase {

    constructor(associatePregnantUseCaseImpl:any) {}

    public async execute(doctorId:string,pregnantId:string){
        return this.associatePregnantUseCaseImpl.execute(doctorId,pregnantId)
    }

}