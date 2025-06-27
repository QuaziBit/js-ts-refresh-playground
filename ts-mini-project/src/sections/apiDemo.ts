// Using Pattern: Function Object Pattern - Callable Object with Methods - Augmented Function Pattern

import logging from '../components/loggs.js';
import bookSearchAPI from '../apis/bookSearchAPI.js';
import buttonClick from '../components/buttonClick.js';

const searchBySubjects = async (subject: string): Promise<any> => {
    logging('[demo_02] init', 'info');

    try {
        const result = await bookSearchAPI.searchBySubjects(subject);

        logging(`demo_02 searchBySubjects result: `, 'info');
        logging.logData(result);
    }
    catch (e) {
        logging(`demo_02 searchBySubjects: ${e}`, 'error');
    }
}

searchBySubjects.clickToSearch = (subject: string, buttonId: string): void => {
    logging('demo_02 searchBySubjects.clickToSearch', 'info');

    const handler = () : void => {
        searchBySubjects(subject);
    }
      
    buttonClick(buttonId, handler);
}

export default searchBySubjects;