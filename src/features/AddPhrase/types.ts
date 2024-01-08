type PhraseStatus = 0 | 1 | 2 | 3 | 4 | 5;

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
