import { AddPhraseForm, Phrase } from '@/features/AddPhrase/types';
import { v4 as uuidv4 } from 'uuid';

export const transformPhraseFormToCard = (phrase: AddPhraseForm): Phrase => {
    return {
        valueId: uuidv4(),
        valueTextOrigin: phrase.textOrigin,
        valueTextTranslated: phrase.textTranslated,
        addDate: new Date(),
        status: 0,
    };
};
