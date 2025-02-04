export default class Doctor {
    constructor(
        public doctorID: string,
        public userID: string,
        public CRM: string,
        public specialization: string,
        public phone1: string,
        public phone2: string,
        public date: number
    ){} // Implementar o resto depois que fizer o caso de uso de acompanhamento médico
}

const nulldoctor = new Doctor("uuid:null", "", "", "", "", "", 0);

export {
    nulldoctor
}