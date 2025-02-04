export default class Gestation {
    constructor(
        public gestationID: string,
        public patientID: string,
        public babynickname: string,
        public date: number,
        public expectedbirthdate: number,
        public pregnancyweek: number,
        public menstruationdate: number,
        public ultrasounddate: number,
        public equipament: string
    ){}
}