
export class Time {
    private hoursArray:Array<string> = [
        "Doce", "Una", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez", "Once"
    ]

    private minutesArray: Array<string> = [
        "en punto", "un minuto", "dos minutos", "tres minutos", "cuatro minutos", "cinco minutos", "seis minutos", "siete minutos", "ocho minutos", "nueve minutos", "diez minutos", 
        "once minutos", "doce minutos", "trece minutos", "catorce minutos", "quince minutos", "dieciséis minutos", "diecisiete minutos", "dieciocho minutos", "diecinueve minutos", "veinte minutos",
        "veintiun minutos", "veintidós minutos", "veintitrés minutos", "veinticuatro minutos", "veinticinco minutos", "veintiséis minutos", "veintisiete minutos", "veintiocho minutos", "veintinueve minutos", "treinta minutos", 
        "treinta y un minutos", "treinta y dos minutos", "treinta y tres minutos", "treinta y cuatro minutos", "treinta y cinco minutos", "treinta y seis minutos", "treinta y siete minutos", "treinta y ocho minutos", "treinta y nueve minutos", "cuarenta minutos", 
        "cuarenta y un minutos", "cuarenta y dos minutos", "cuarenta y tres minutos", "cuarenta y cuatro minutos", "cuarenta y cinco minutos", "cuarenta y seis minutos", "cuarenta y siete minutos", "cuarenta y ocho minutos", "cuarenta y nueve minutos", "cincuenta minutos",
        "cincuenta y un minutos", "cincuenta y dos minutos", "cincuenta y tres minutos", "cincuenta y cuatro minutos", "cincuenta y cinco minutos", "cincuenta y seis minutos", "cincuenta y siete minutos", "cincuenta y ocho minutos", "cincuenta y nueve minutos"
    ]

    private partOfDayArray: Array<string> = [
        "de la mañana", "del medio día", "de la tarde", "de la noche", "de la madrugada"
    ]

    private today: Date
    private hours: number
    private minutes: number

    constructor(date: Date = new Date()){
        this.today = date
        this.hours = this.today.getHours()
        this.minutes = this.today.getMinutes()
    }

    private formatHours = () => {
        let hours =  this.hours
        hours = (hours + 24) % 12 || 0
        return hours
    }
    
    private hourToString = (hour: number) =>{
        for (let i = 0; i < 12; i++){
            if (i == hour) {
                return this.hoursArray[i]
            }
        }
    }

    private minuteToString = (minute: number) => {
        for (let i = 0; i < 60; i++){
            if (i == minute) {
                return this.minutesArray[i]
            }
        }
    }

    private getPartOfDay = () => {
        let partOfDay: string
        if (this.hours >= 6 && this.hours <= 11){
            return partOfDay = this.partOfDayArray[0]
        } else if (this.hours == 12) {
            return partOfDay = this.partOfDayArray[1]
        } else if (this.hours >= 13 && this.hours <= 18) {
            return partOfDay = this.partOfDayArray[2]
        } else if (this.hours >= 19 && this.hours <= 23 || this.hours == 0) {
            return partOfDay = this.partOfDayArray[3]
        } else if (this.hours >= 1 && this.hours <= 5) {
            return partOfDay = this.partOfDayArray[4]
        }
    }
    
    private printTimeMessage = (strHour:any, strMinute: any, partOfDay: any) => {
        let stringTime: string
        let currentTimeMessage: string = "Hora actual"
        if (this.minutes == 0){
            stringTime = `${currentTimeMessage}: ${strHour} ${partOfDay} ${strMinute}`
        } else {
            stringTime = `${currentTimeMessage}: ${strHour} ${partOfDay} con ${strMinute}`
        }
        return stringTime
    }

    private getStringHour = () => this.hourToString(this.formatHours())

    private getStringMinute = () => this.minuteToString(this.minutes)

    public print = () => {
        const strHour = this.getStringHour()
        const strMinute = this.getStringMinute()
        const strPartOfDay = this.getPartOfDay()
        const currentTime = this.printTimeMessage(strHour, strMinute, strPartOfDay)
        console.log(currentTime)
    }
}
