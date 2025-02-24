export default class ListAllGlicoseUseCase {

    constructor (private glicoseUseCaseImpl:any) {}
    
    async execute(id:string){
        return this.glicoseUseCaseImpl.execute(id)
    }

}