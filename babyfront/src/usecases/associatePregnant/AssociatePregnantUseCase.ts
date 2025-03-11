export default class AssociatePregnantUseCase {

    constructor(private associatePregnantUseCaseImpl: any) { }

    public async execute(doctorId: string, pregnantId: string, update: boolean) {
        return this.associatePregnantUseCaseImpl.execute(doctorId, pregnantId, update)
    }

}