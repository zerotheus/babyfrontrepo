export default class ListAllPregnantUseCase {

    constructor(private listAllPregnantUseCaseImpl: any) { }

    async execute() {
        return await this.listAllPregnantUseCaseImpl.execute()
    }

}