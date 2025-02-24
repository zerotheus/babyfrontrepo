export default class GetOnePregnantUseCase {

    constructor (private getOnePregnantUseCaseImpl:any) {}
    
    async execute(id:string){
        return this.getOnePregnantUseCaseImpl.execute(id)
    }

}