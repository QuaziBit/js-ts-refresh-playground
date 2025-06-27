// Using Pattern: Function with inner methods

import logging from '../components/loggs.js';

type ApiType = 'subject';

const openlibraryOrg = () : void => {
    logging('[bookSearchAPI] init', 'info');
}

openlibraryOrg.newError = (error: unknown, context: string): Error => {
    const msg = `${context} - ${error}`;
    return new Error(msg);
}

openlibraryOrg.apiFactory = (apiType: ApiType): string => {
    
    if (!apiType) throw openlibraryOrg.newError('apiType not provided','apiFactory');
    
    return `https://openlibrary.org/subjects/${apiType}.json`;
}

openlibraryOrg.searchBySubjects = async (subject: string) : Promise<any> => {
    logging('openlibraryOrg.searchBySubjects initialized.', 'info');

    if (!subject) {
        logging('openlibraryOrg.searchBySubjects subject is empty.', 'warn');
        return;
    }

    const url = openlibraryOrg.apiFactory('subject');

    try {
        const response = await fetch(url);

        if (!response.ok) throw openlibraryOrg.newError(response, 'response');

        const data = await response.json();

        logging('openlibraryOrg.searchBySubjects result: ', 'info');

        return data;
    }
    catch (e) {
        throw openlibraryOrg.newError(e, 'response');
    }
}

export default openlibraryOrg;