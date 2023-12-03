import { AddPhraseForm, Phrase } from '@/features/AddPhrase/types';
import { transformPhraseFormToCard } from '@/features/AddPhrase/helpers';
import { defineStore } from 'pinia';
import { Ref, ref, watch } from 'vue';

export const phraseListStore = defineStore('phraseListStore', () => {
    const list: Ref<Phrase[]> = ref([]);

    let db: IDBDatabase;
    let idbStore: IDBObjectStore;

    const sortList = () => {
        list.value.sort((a, b) => (a.addDate > b.addDate ? -1 : 1));
    };

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

        const openTransaction = db.transaction('cards', 'readonly');
        const request = openTransaction.objectStore('cards').getAll();
        request.onsuccess = () => {
            if (request.result) {
                list.value = [...request.result];
            } else {
                // eslint-disable-next-line no-console
                console.log('cards are not found');
            }
        };
        request.onerror = () => {
            throw new Error('DB has not been opened');
        };
    };

    const getPhrase = async (id: Phrase['valueId']): Promise<Phrase | null> => {
        const getTransaction = db.transaction('cards', 'readonly');
        idbStore = getTransaction.objectStore('cards');
        const response = idbStore.get(id);

        return new Promise((resolve, reject) => {
            response.onsuccess = () => {
                resolve(response.result);
                return response.result;
            };
            response.onerror = () => {
                reject(new Error('Phrase have not been found'));
            };
        });
    };

    const addPhrase = (card: AddPhraseForm) => {
        const addTransaction = db.transaction('cards', 'readwrite');
        idbStore = addTransaction.objectStore('cards');

        const transformedCard = transformPhraseFormToCard(card);
        const request = idbStore.add(transformedCard);

        request.onsuccess = () => {
            list.value.push(transformedCard);
            // eslint-disable-next-line no-console
            console.log('The card was successfully added');
        };
        request.onerror = () => {
            throw new Error('Card have not been added');
        };
    };

    const editPhrase = async (card: AddPhraseForm, id: Phrase['valueId']) => {
        const existedCard = await getPhrase(id);
        if (!existedCard) {
            throw new Error('card was not found');
        }

        const modifiedCard: Phrase = {
            ...existedCard,
            valueTextOrigin: card.textOrigin,
            valueTextTranslated: card.textTranslated,
        };

        const putTransaction = db.transaction('cards', 'readwrite');
        idbStore = putTransaction.objectStore('cards');
        const putRequest = idbStore.put(modifiedCard);

        putRequest.onsuccess = () => {
            const targetPhraseOrder = list.value.findIndex((phrase) => phrase.valueId === id);

            if (targetPhraseOrder >= 0) {
                list.value[targetPhraseOrder] = { ...modifiedCard };
                // eslint-disable-next-line no-console
                console.log('The card was successfully edited');
            } else {
                throw new Error('Card have not been found locally');
            }
        };
        putRequest.onerror = () => {
            throw new Error('Card have not been edited');
        };
    };

    const removePhrase = (id: Phrase['valueId']) => {
        const removeTransaction = db.transaction('cards', 'readwrite');
        idbStore = removeTransaction.objectStore('cards');
        const responce = idbStore.delete(id);

        responce.onsuccess = () => {
            list.value = list.value.filter((phrase) => phrase.valueId != id);
            // eslint-disable-next-line no-console
            console.log('The card was successfully removed');
        };
        responce.onerror = () => {
            throw new Error('Card have not been removed');
        };
    };

    watch(
        () => list.value,
        () => {
            sortList();
        },
        { deep: true, immediate: true }
    );

    return { list, addPhrase, editPhrase, removePhrase, getPhrase };
});
