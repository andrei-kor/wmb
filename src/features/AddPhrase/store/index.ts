import { AddPhraseForm, Phrase } from '@/features/AddPhrase/types';
import { transformPhraseFormToCard } from '@/features/AddPhrase/helpers';
import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';

export const phraseListStore = defineStore('phraseListStore', () => {
    const list: Ref<Phrase[]> = ref([]);

    let db;
    let cardListIDB;

    const openRequest = indexedDB.open('letcard', 1);

    openRequest.onerror = () => {
        // eslint-disable-next-line no-console
        console.error('IDB has not been created', openRequest.error);
    };

    openRequest.onupgradeneeded = () => {
        db = openRequest.result;
        if (!db.objectStoreNames.contains('cards')) {
            db.createObjectStore('cards', { keyPath: 'valueId' });
        }
    };

    openRequest.onsuccess = () => {
        db = openRequest.result;

        db.onversionchange = () => {
            db.close();
            alert('Please, reload this page. The database has to be updated');
        };

        const cardTransaction = db.transaction('cards', 'readwrite');
        const request = cardTransaction.objectStore('cards').getAll();
        request.onsuccess = () => {
            if (request.result) {
                list.value = [...request.result];
            } else {
                // eslint-disable-next-line no-console
                console.log('cards are not found');
            }
        };
    };

    const addPhrase = (card: AddPhraseForm) => {
        const cardTransaction = db.transaction('cards', 'readwrite');
        cardListIDB = cardTransaction.objectStore('cards');

        const transformedCard = transformPhraseFormToCard(card);
        const request = cardListIDB.add(transformedCard);

        request.onsuccess = () => {
            list.value.push(transformedCard);
            // eslint-disable-next-line no-console
            console.log('The card was successfully added', request.result);
        };

        request.onerror = () => {
            // eslint-disable-next-line no-console
            console.error('Card have not been added', request.error);
        };
    };

    return { list, addPhrase };
});
