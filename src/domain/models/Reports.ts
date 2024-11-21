import { infoApprentice } from "./interface/apprentice-interface";
import { infoCoach } from "./interface/coach-interface";
import { infoReport } from "./interface/training-interface";

export class Report {
    constructor(public apprentice: infoApprentice, 
        public coach: infoCoach, 
        public report: infoReport

    ) {

    }
}
const newReport = new Report({idApprentice: 1, userName: "LauraZuluaga"}, {idCoach: 5, userName: "German"}, {trainingDate: new Date(2024/11/20), trainigType: "tren superior", trainingDuration: 50})