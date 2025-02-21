export default class MaternalDataOfApregnant {

    constructor (private maternalDataOfApregnantImpl : any) {}

    async execute(id:string){
        return this.maternalDataOfApregnantImpl.execute(id)
    }

}