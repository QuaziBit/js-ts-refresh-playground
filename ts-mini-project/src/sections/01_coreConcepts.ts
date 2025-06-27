// Using Pattern: Function Object Pattern - Callable Object with Methods - Augmented Function Pattern

/**
 * ====================================================
 * TypeScript Fundamentals – Practice Playground
 * ====================================================
 *
 * This file serves as a hands-on sandbox for exploring:
 *
 * Core Concepts:
 *  - Primitive types & variable declarations (let, const, var)
 *  - Type annotations & inference
 *  - Arrays, tuples, readonly arrays
 *  - Functions (declaration, expression, arrow)
 *  - Function signatures & arrow functions
 *  - Objects, interfaces, and type aliases
 *  - Literal types, union and intersection types
 *  - Enums (numeric & string)
 *  - Scopes: global, function, block, lexical (closures)
 *  - Control flow (if, switch, loops)
 *  - Nullish coalescing & optional chaining
 *
 * Note:
 *  This file is standalone and not part of the app.
 *  It exists purely for personal learning and exploration.
 */

import logging from '../components/loggs.js';
import buttonClick from '../components/buttonClick.js';


const coreConcepts = (): void => { }

// --- Variables & Primitives ---
coreConcepts.primitives = (): void => {
    logging('\n', 'info');

    logging('Working with [numbers, boolean, strings, strings concatination]', 'info');

    const year: number = 2025;
    const singularity: number = 2045;
    let doCoddiong: boolean = true;
    let message: string = `Techologycal singularity must accure in ${(singularity - year)} years!\n`;
    message += `\tLet's do some codding for fun while no singularty, ${doCoddiong}!`;

    logging(`\ttypeof year: ${typeof year} - val: ${year}`, 'info');
    logging(`\ttypeof doCoddiong: ${typeof doCoddiong} - val: ${doCoddiong}`, 'info');
    logging(`\ttypeof singularity: ${typeof singularity} - val: ${singularity}`, 'info');
    logging(`\ttypeof message: ${typeof message} - val: ${message}`, 'info');
    logging(`\tWorking with [numbers, strings, strings concatination] ${message}`, 'info');

    logging('\n\n', 'info');

    // number types
    const score: number = 99.5;
    const hex: number = 0x1A;
    const binary: number = 0b10001101;
    const big: bigint = BigInt(12345678901234567890);

    logging('Working with [number (float, hex, binary, big)]', 'info');
    logging(`\ttypeof score: ${typeof score} - val: ${score}`, 'info');
    logging(`\ttypeof hex: ${typeof hex} - '0x1A' val: ${hex}`, 'info');
    logging(`\ttypeof binary: ${typeof binary} - '0b10001101' val: ${binary}`, 'info');
    logging(`\ttypeof big: ${typeof big} - val: ${big}`, 'info');

    logging('\n\n', 'info');

    // special types: null and undefined
    const nothing: null = null;
    const notAssigned: undefined = undefined;

    logging('Working with [null, undefined]', 'info');
    logging(`\ttypeof nothing: ${typeof nothing} - val: ${nothing}`, 'info');
    logging(`\ttypeof notAssigned: ${typeof notAssigned} - val: ${notAssigned}`, 'info');

    logging('\n\n', 'info');

    // symbol
    const sym1: symbol = Symbol('id');
    const sym2: symbol = Symbol('id');

    logging('Working with [symbol]', 'info');
    logging(`\tsym1 === sym2: ${sym1 === sym2}`, 'info');

    logging('\n\n', 'info');

}


// --- Type Annotations & Inference ---
coreConcepts.annotations = (): void => {
    logging('\n', 'info');

    logging('Working with [Annotations & Inference]', 'info');

    // Explicit type annotation
    const year: number = 2025;

    // Type inference (TypeScript guesses the type)
    const singularity: number = 2045;

    // Implicit any (if you have "noImplicitAny": true in tsconfig)
    // function getMessage(msg) { // Parameter 'msg' implicitly has an 'any' type.ts(7006)
    //     return msg.toUpperCase(); // Error: msg has type 'any'
    // }

    // Proper annotation to fix that
    function getMessage(msg: string): string {
        return msg.toUpperCase();
    }

    const message: string = getMessage(`Techologycal singularity must accure in ${(singularity - year)} years!\n`);

    // Complex inference
    const future = {
        year: year,
        singularity: singularity,
        message: message
    }

    logging('\n\t[Object Inference]', 'info');
    logging(`\tuser.year: ${future.year}`, 'info');
    logging(`\tuser.singularity: ${future.singularity}`, 'info');
    logging(`\tuser.message: ${future.message}`, 'info');

    function printValue(val: string | number) {
        if (typeof val === 'string') logging(`\t${val.toUpperCase()}`, 'info');
        if (typeof val === 'number') logging(`\tyear: ${val} `, 'info');
    }

    logging('\n\t[Type Narrowing]', 'info');
    printValue(message);
    printValue(year);

    logging('\n\n', 'info');
}


// --- Arrays & Tuples ---
coreConcepts.arraysTuples = (): void => {
    logging('\n', 'info');

    logging('Working with [Arrays & Tuples]', 'info');

    const languages: string[] = ['JavaScript', 'TypeScript', 'Python'];
    languages.push('Java');

    const currentYear: Array<number> = [2,0,2,5];

    // Mixed-type array (not ideal, but possible)
    const mixed: (string | number)[] = [5, 'April', 2025];

    const readonlyNums: readonly number[] = [1,2,3,4,5];
    // readonlyNums.push(6); // Property 'push' does not exist on type 'readonly number[]'

    // Tuples — fixed-length, typed positions
    const point: [number, number] = [10,25];

    // Destructuring from tuples
    const [x, y] = point;

    // Named tuple elements (TS 4.0+)
    const currentDate: [dd: number, mm: string, yyyy: number] = [5, 'April', 2025];

    logging(`\ttypeof languages: ${typeof languages}`, 'info');
    logging(`\tvalues languages: ${currentYear}`, 'info');
    logging(`\tlanguages: ${languages.join(', ')}`, 'info');
    logging(`\ttypeof currentYear: ${typeof currentYear}`, 'info');
    logging(`\tvalues currentYear: ${currentYear}`, 'info');
    logging(`\tcurrentYear: ${currentYear.join('')}`, 'info');
    logging(`\ttypeof mixed: ${typeof mixed}`, 'info');
    logging(`\tvalues mixed: ${mixed}`, 'info');
    logging(`\tmixed: ${mixed.join(', ')}`, 'info');
    logging(`\ttypeof readonlyNums: ${typeof readonlyNums}`, 'info');
    logging(`\tvalues readonlyNums: ${readonlyNums}`, 'info');
    logging(`\treadonlyNums: ${readonlyNums.join(', ')}`, 'info');
    logging(`\ttypeof point: ${typeof point}`, 'info');
    logging(`\tvalues point: ${point}`, 'info');
    logging(`\t(point[0], point[1]): (${point[0]}, ${point[1]})`, 'info');
    logging(`\ttypeof x: ${typeof x}`, 'info');
    logging(`\tvalue x: ${x}`, 'info');
    logging(`\ttypeof y ${typeof y}`, 'info');
    logging(`\tvalue y: ${y}`, 'info');
    logging(`\ttypeof currentDate: ${typeof currentDate}`, 'info');
    logging(`\tvalues currentDate: ${currentDate}`, 'info');
    logging(`\t(Day, Month, Year): (${currentDate[0]}, ${currentDate[1]}, ${currentDate[2]})`, 'info');
    

    logging('\n\n', 'info');
}

// --- Common Array Methods ---
coreConcepts.commonArrayMethods = (): void => {
    logging('\n', 'info');

    logging('Working with [Common Array Methods]', 'info');

    /*
    :: Method -------------- Purpose
    ::::::::::::::::::::::::::::::::::::::::
    :: array.map() --------- Transform elements
    :: array.filter() ------ Keep matching elements
    :: array.reduce() ------ Combine to a single value
    :: array.find() -------- Get the first match
    :: array.some() -------- Check if any match
    :: array.every() ------- Check if all match
    :: array.sort() -------- Order elements
    :: array.forEach() ----- Loop over elements
    :: array.includes() ---- Check if value exists (primitive or shallow)
    :: array.indexOf() ----- Find index of value (primitive)
    :: array.findIndex() --- Find index based on condition
    */

    const numbers: number[] = [0,1,2,3,4,5,6,7,8,9];
    const colorTuple: [string, string] = ['red', 'orange'];

    logging(`original numbers: ${numbers}`, 'info');
    logging(`original colorTuple: ${colorTuple}`, 'info');

    logging(`\n`, 'info');

    // map
    const double: number[] = numbers.map((n) => n * 2);
    logging(`numbers.map((n) => n * 2) -> double: ${double}`, 'info');

    logging(`\n`, 'info');

    // filter
    const even: number[] = numbers.filter((n) => n % 2 === 0);
    logging(`numbers.filter((n) => n % 2 === 0) -> even: ${even}`, 'info');

    logging(`\n`, 'info');

    // reduce
    const total: number = numbers.reduce((sum, current) => sum + current, 0);
    logging(`numbers.reduce((sum, current) => sum + current, 0)-> total: ${total}`, 'info');

    logging(`\n`, 'info');

    // find
    const found: any = numbers.find((n) => n > 3);
    logging(`numbers.find((n) => n > 3) -> found: ${found} - typeof: ${typeof found}`, 'info');

    logging(`\n`, 'info');

    // some / every
    const hasEven = numbers.some((n) => n % 2 === 0);
    const hasOdd = numbers.some((n) => n % 2 !== 0);
    const allPositive = numbers.every((n) => n > 0);
    logging(`numbers.some((n) => n % 2 === 0) -> has even: ${hasEven}`, 'info');
    logging(`numbers.some((n) => n % 2 !== 0) -> has odd: ${hasOdd}`, 'info');
    logging(`numbers.every((n) => n > 0) -> all positive: ${allPositive}`, 'info');

    logging(`\n`, 'info');

    // includes
    const hasThree = numbers.includes(3);
    logging(`numbers.includes(3) -> has three: ${hasThree}`, 'info');

    logging(`\n`, 'info');

    // indexOf
    const indexOf4 = numbers.indexOf(4);
    const missingIndex = numbers.indexOf(100);
    logging(`numbers.indexOf(4) -> index of 4: ${indexOf4}`, 'info');
    logging(`numbers.indexOf(100) -> imissing index: ${missingIndex}`, 'info');

    logging(`\n`, 'info');

    // findIndex
    const evenIndex = numbers.findIndex((n) => n % 2 === 0);
    logging(`numbers.findIndex((n) => n % 2 === 0) -> even index: ${evenIndex}`, 'info');

    logging(`\n`, 'info');

    // for sorting
    const nums: number[] = [100,-2,0,10,-1,50,3,4,9,6,8,7,2,5];

    // --- sort with numbers - cloning
    // cloning array -> [...nums]
    const sortedAsc = [...nums].sort((a,b) => a - b);  // ascending
    const sortedDesc = [...nums].sort((a,b) => b - a); // descending
    logging(`nums -> : ${nums}`, 'info');
    logging(`[...nums].sort((a,b) => a - b) -> sortedAsc: ${sortedAsc}`, 'info');
    logging(`[...nums].sort((a,b) => b - a) -> sortedDesc: ${sortedDesc}`, 'info');

    logging(`\n`, 'info');

    // --- sort with numbers - no cloning
    nums.sort((a,b) => a - b);  // ascending
    logging(`nums.sort((a,b) => a - b) -> asc: ${nums}`, 'info');
    nums.sort((a,b) => b - a); // descending
    logging(`nums.sort((a,b) => b - a))-> desc: ${nums}`, 'info');

    logging(`\n`, 'info');

    // --- sort with strings
    const fruits = ['banana', 'apple', 'Orange', 'grape'];
    const caseSensitive = [...fruits].sort(); // default: lexicographical, case-sensitive
    const caseInsensitive = [...fruits].sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    logging(`fruits -> ${fruits.join(', ')}`, 'info');
    logging(`[...fruits].sort() -> case sensitive: ${caseSensitive.join(', ')}`, 'info');
    logging(`[...fruits].sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())) -> case insensitive: ${caseInsensitive.join(', ')}`, 'info');

    logging(`\n`, 'info');

    // --- sort with array of objects
    const fruitsObj = [
        { id: 2, fruit: 'apple' },
        { id: 1, fruit: 'banana' },
        { id: 4, fruit: 'Orange' },
        { id: 3, fruit: 'grape' }
    ]
    const sortedById = [...fruitsObj].sort((a,b) => a.id - b.id);
    logging(`fruitsObj -> ${fruitsObj.map(a => a.fruit).join(', ')}`, 'info');
    logging(`[...fruitsObj].sort((a,b) => a.id = b.id) -> sortedById: ${sortedById.map(a => a.fruit).join(', ')}`, 'info');

    logging(`\n`, 'info');

    const sortByName = [...fruitsObj].sort((a,b) => a.fruit.localeCompare(b.fruit));
    logging(`[...fruitsObj].sort((a,b) => a.fruit.localeCompare(b.fruit)) -> sortByName: ${sortByName.map(a => a.fruit).join(', ')}`, 'info');

    logging(`\n`, 'info');

    // forEach (no return)
    // .forEach() - You want to do something, no result - returns: undefined
    logging(`numbers.forEach((n): \n`, 'info');
    numbers.forEach((n) => {
        logging(`${n} * 2 = ${n * 2}`, 'info');
    });
    
    logging(`\n`, 'info');

    // .map() - You want to transform and return data - returns: new array
    const mod2 = numbers.map((n) => n % 2);
    logging(`numbers.map((n) => n % 0) -> mod2: ${mod2.join(', ')}`, 'info');

    logging(`\n`, 'info');

    // Check if tuple contains values
    const hasBlue = colorTuple.includes('blue');
    const hasRed = colorTuple.includes('red');
    logging(`colorTuple.includes('blue') -> has blue: ${hasBlue}`, 'info');
    logging(`colorTuple.includes('red') -> has red: ${hasRed}`, 'info');

    logging('\n\n', 'info');
}


// --- Functions & Return Types ---
coreConcepts.functions = (): void => {

}


coreConcepts.runSubSection = (id: string): void => {

    const handler = (): void => {
        const subSectionId = parseInt(id.split('-')[1]);

        logging(`coreConcepts - subSectionId: ${subSectionId}`, 'info');

        if (subSectionId === 1) coreConcepts.primitives();
        if (subSectionId === 2) coreConcepts.annotations();
        if (subSectionId === 3) coreConcepts.arraysTuples();
        if (subSectionId === 4) coreConcepts.commonArrayMethods();
    }

    buttonClick(id, handler);
}

export default coreConcepts;
