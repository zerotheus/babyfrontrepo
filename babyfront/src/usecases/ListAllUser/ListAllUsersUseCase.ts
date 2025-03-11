export default class ListAllUsersUseCase {
    constructor (private listAllUsersUseCaseImpl: any) {}

    async execute() {
        return await this.listAllUsersUseCaseImpl.execute();
    }
}