export enum PhraseStatus {
    IN_ORDER = 'IN_ORDER',
    IN_PROCESS = 'IN_PROCESS',
    COMPLETED = 'COMPLETED',
}

export interface Phrase {
    valueId: string;
    valueTextOrigin: string;
    valueTextTranslated: string;
    addDate: Date;
    category?: string;
    status: PhraseStatus;
}

export interface AddPhraseForm {
    textOrigin: Phrase['valueTextOrigin'];
    textTranslated: Phrase['valueTextTranslated'];
}
