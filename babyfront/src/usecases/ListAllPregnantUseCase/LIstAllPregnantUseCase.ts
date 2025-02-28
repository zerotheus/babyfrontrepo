export default class ListAllPregnantUseCase {

    constructor (private listAllPregnantUseCaseImpl : any) {}

    async execute(){
        return this.listAllPregnantUseCaseImpl.execute()
    }

}