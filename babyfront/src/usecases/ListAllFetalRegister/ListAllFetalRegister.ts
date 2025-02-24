export default class ListAllFetalRegister {

    constructor (private fetalRegisterImpl:any) {}
    
    async execute(id:string){
        return this.fetalRegisterImpl.execute(id)
    }

}