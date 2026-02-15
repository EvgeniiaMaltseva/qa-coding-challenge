import { DateHelper } from "../utils/dateHelper";


export type BeitragsrechnerData = {
    berufsstatus: string;
    einkommen: string;
    versicherung: string;
    versicherungStart: string;
    geburtstag: {
        day: string;
        month: string;
        year: string;
    };
};

export const beitragsrechnerFlows = {
    angestellt: (): BeitragsrechnerData => {
        const birthDate = DateHelper.getDateMinusYears(35);

        return {
            berufsstatus: 'employed',
            einkommen: '80.000',
            versicherung: 'Vollversicherung',
            versicherungStart: '5: 2026-06-01',
            geburtstag: {
                day: birthDate.day,
                month: birthDate.month,
                year: birthDate.year
            },
        };
    },
};