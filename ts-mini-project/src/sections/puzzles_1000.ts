// Using Pattern: Function Object Pattern - Callable Object with Methods - Augmented Function Pattern

import logging from '../components/loggs.js';
import buttonClick from '../components/buttonClick.js';

const puzzles = () : void => {
    
}

puzzles.arrayAddition = () : void => {
    logging(`puzzles - arrayAddition`, 'info');

    /*
        Have the function ArrayAddition(arr) take the array of numbers stored in arr and return the string true 
        if any combination of numbers in the array (excluding the largest number) can be added up to equal 
        the largest number in the array, otherwise return the string false.

        For example:
        If arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23.

        The array will not be empty, will not contain all the same elements, and may contain negative numbers.

        Examples:
        Input: [5, 7, 16, 1, 2]
        Output: false

        Input: [3, 5, -1, 8, 12]
        Output: true
    */
   
    /* 
        The problem is a variation of the Subset Sum Problem, 
        so ideally we should build all possbile subsets from the arr and check each subset sum.
    */

    // solving without subsets
    const puzzle = (arr_input: number[]) : string => {
        logging(`puzzles - arrayAddition ::: not sorted - arr_input --> ${arr_input.join(', ')}`, 'info');

        let result: string = 'false';

        // sort; get the largers number; check if the sum of all smallest numbers === to-largest;

        // sort
        arr_input.sort((a,b) => a - b); // ascending

        // test sroting
        logging(`puzzles - arrayAddition ::: arr_input --> ${arr_input.join(', ')}`, 'info');

        // get the largers number
        let max = Number.MIN_VALUE;
        arr_input.forEach(n => {
            if (n >= max) {
                max = n;
            }
        });

        // check if the sum of all smallest numbers === to-largest
        let sum: number = 0;
        arr_input.forEach(n => {
            if (n !== max) {
                sum += n;
            }
        });

        if (sum === max) {
            result = 'true';

            logging(`\t***the sum of all smallest numbers*** sum: ${sum} --- max: ${max}`, 'info');

            return result;
        }

        // check if the sum of the combination of any numbers can be added up to === to-largest
        const loopLenght: number = arr_input.length - 1;
        for (let i = 0; i < loopLenght; i++) {
            let s = arr_input[i];

            logging(`\ti: ${i} --> ${s}`, 'info');

            for (let j = (i + 1); j < loopLenght; j++) {
                let s2 = 0

                logging(`\t\tj: ${j} --> ${arr_input[j]}`, 'info');

                let k = j;
                while (k < loopLenght) {
                    logging(`\t\t\tk: ${k} --> ${arr_input[k]}`, 'info');

                    s2 += arr_input[k];                        
                    
                    k++;
                }

                const finalSum = (s + s2);

                logging(`\ts: ${s} ::: final sum: ${finalSum} --- max: ${max}`, 'info');

                if (finalSum === max) {
                    result = 'true';
    
                    logging(`\t***s: ${finalSum} --- max: ${max}`, 'info');
                    
                    break;
                }
            }

            if (result === 'true') {
                break;
            }
        }

        return result;
    }

    const tests: { [key: string]: { arr: number[]; expected: string } } = {
        "test_1":  { arr: [4, 6, 23, 10, 1, 3], expected: 'true' },
        "test_2":  { arr: [5, 7, 16, 1, 2], expected: 'false' },
        "test_3":  { arr: [3, 5, -1, 8, 12], expected: 'true' },
        "test_4":  { arr: [2, 4, 1, 9], expected: 'false' },
        "test_5":  { arr: [3, 4, 6, 2, 15], expected: 'true' },
        "test_6":  { arr: [5, 1, 7, 2, 9], expected: 'true' },
        "test_7":  { arr: [5, 2, 6, 1, 14], expected: 'true' },
        "test_8":  { arr: [1, 2, 3, 8], expected: 'false' },
        "test_9":  { arr: [1, 2, 3, 4, 10], expected: 'true' },
        "test_10": { arr: [6, 1, 2, 9], expected: 'true' },
        "test_11": { arr: [1, 5, 9, 2, 3, 17], expected: 'true' },
        "test_12": { arr: [1, 3, 6, 7, 13], expected: 'true' },
        "test_13": { arr: [-2, -3, 7, 4, 5], expected: 'true' },
        "test_14": { arr: [-1, -2, -3, -4, 10], expected: 'false' },
        "test_15": { arr: [2, 4, 6, 10, 22], expected: 'true' },
        "test_16": { arr: [1, 2, 5, 6, 14], expected: 'true' },
        "test_17": { arr: [2, 3, 5, 7, 11, 13, 26], expected: 'true' }
    };

    for(const key of Object.keys(tests)) {
        const { arr, expected } = tests[key];
        const result: string = puzzle(arr);
        logging(`puzzles ::: ${key} - arrayAddition --> ${result} ::: expected: ${expected}`, 'info');
        logging(`\n`, 'info');
    }
}

puzzles.runPuzzles = (id: string): void => {

    const handler = (): void => {
        const puzzleId = parseInt(id.split('-')[1]);

        logging(`puzzles - puzzleId: ${puzzleId}`, 'info');

        if (puzzleId === 1) puzzles.arrayAddition();
    }

    buttonClick(id, handler);
}

export default puzzles;