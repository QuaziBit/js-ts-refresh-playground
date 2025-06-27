var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import logging from '../components/loggs.js';
import bookSearchAPI from '../apis/bookSearchAPI.js';
import buttonClick from '../components/buttonClick.js';
const searchBySubjects = (subject) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bookSearchAPI.searchBySubjects(subject);
        logging(`demo_02 searchBySubjects result: `, 'info');
        logging.logData(result);
    }
    catch (e) {
        logging(`demo_02 searchBySubjects: ${e}`, 'error');
    }
});
searchBySubjects.clickToSearch = (subject, buttonId) => {
    logging('demo_02 searchBySubjects.clickToSearch', 'info');
    const handler = () => {
        searchBySubjects(subject);
    };
    buttonClick(buttonId, handler);
};
export default searchBySubjects;
