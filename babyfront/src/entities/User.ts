export default class User {
    constructor(
        public uuid: string,
        public login: string,
        public password: string,
        public name: string,
        public address: string,
        public phone: string,
        public email: string,
        public gender: number, // 0 - Male, 1 - Female,
        public birthdate: number,
        public date: number,
        public image: string,
        public type: number // 0 - Adm, 1 - Doctor, 2 - Pregnant
    ){}
}