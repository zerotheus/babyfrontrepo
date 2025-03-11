import Gestation from "@/entities/Gestation"

export default class RegisterGestationUseCase {
    constructor (private registerGestationImpl: any) {}

    async execute(gestationData: any): Promise<any> {
        const result = await this.registerGestationImpl.execute(gestationData);
        return result;
    }
}