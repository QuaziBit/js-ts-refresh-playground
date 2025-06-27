// Using Pattern: Function with inner methods
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Fetching books data from public API: https://openlibrary.org/developers/api
 * Examples - search URL and add .json:
 * https://openlibrary.org/search.json?q=the+lord+of+the+rings
 *
 * Subjects search:
 * https://openlibrary.org/subjects/sci-fi.json
 * https://openlibrary.org/subjects/love.json
 * https://openlibrary.org/subjects/adventure.json
*/
import logging from '../components/loggs.js';
const openlibraryOrg = () => {
};
openlibraryOrg.newError = (error, context) => {
    const msg = `${context} - ${error}`;
    return new Error(msg);
};
openlibraryOrg.apiFactory = (apiType) => {
    if (!apiType)
        throw openlibraryOrg.newError('apiType not provided', 'apiFactory');
    return `https://openlibrary.org/subjects/${apiType}.json`;
};
openlibraryOrg.searchBySubjects = (subject) => __awaiter(void 0, void 0, void 0, function* () {
    logging('openlibraryOrg.searchBySubjects initialized.', 'info');
    if (!subject) {
        logging('openlibraryOrg.searchBySubjects subject is empty.', 'warn');
        return;
    }
    const url = openlibraryOrg.apiFactory('subject');
    try {
        const response = yield fetch(url);
        if (!response.ok)
            throw openlibraryOrg.newError(response, 'response');
        const data = yield response.json();
        logging('openlibraryOrg.searchBySubjects result: ', 'info');
        return data;
    }
    catch (e) {
        throw openlibraryOrg.newError(e, 'response');
    }
});
export default openlibraryOrg;
// old
/*
openlibraryOrg.searchBySubjects = async (subject: string) : Promise<any> => {
    logging('openlibraryOrg.searchBySubjects initialized.', 'info');

    if (!subject) {
        logging('openlibraryOrg.searchBySubjects subject is empty.', 'warn');
        return;
    }

    const url = `https://openlibrary.org/subjects/${subject}.json`;


    const promise: Promise<any> = new Promise((resolve, reject) => {
        fetch(url)
            .then(result => {
                logging('openlibraryOrg.searchBySubjects result: ', 'info');
                resolve(result.json());
            })
            .catch(error => {
                logging('openlibraryOrg.searchBySubjects: ', 'error');
                reject(error);
            })
    });

    return promise;
}
*/
