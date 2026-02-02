// Challenge 1
/*  Create a function addTwo that accepts one input and adds 2 to it. */

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

function addTwo(num: number): number {
    return num + 2;
}

// ________________________________________________________________________________________________
// Challenge 2
/* 
Create a function addS that accepts one input and adds an "s" to it.
*/
// uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));

function addS (word: string): string {
    return word + "s";
}

// ________________________________________________________________________________________________
// Challenge 3
/* 
Create a function called map that takes two inputs:
1. An array of numbers (a list of numbers)
2. A 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/
console.log(map([1, 2, 3], addTwo));

function map (
    array: number[],
    callback: (value: number) => number
): number[] {
    const result: number[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

// Challenge 4
/* 
The function forEach takes an array and a callback, and runs the callback on each element of the array. 
forEach does not return anything.
*/
let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char) {
  alphabet += char;
});
console.log(alphabet);

function forEach<T>(
    array: T[],
    callback: (value: T) => void
): void {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

// should output abcd


// ________________________________________________________________________________________________
// Challenge 5
/* 
Rebuild your map function, this time instead of using a for loop, use your own forEach function that you just defined. 
Call this new function mapWith.//console.log(mapWith([1, 2, 3], addTwo));
*/
console.log(mapWith([1, 2, 3], addTwo));// should output [ 3, 4, 5 ]

function mapWith (
    array: number[],
    callback: (value: number) => number
): number[] {
    const result: number[] = [];

    forEach(array, (value) => {
        result.push(callback(value));
    });

    return result;
}

// ________________________________________________________________________________________________
// Challenge 6
/* 
The function reduce takes an array and reduces the elements to a single value. 
For example it can sum all the numbers, multiply them, 
or any operation that you can put into a function.
*/

const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce(nums, add, 0))

function reduce<T, U>(
    array: T[],
    callback: (accumulator: U, value: T) => U,
    initialValue: U
): U {
    let accumulator = initialValue;

    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
}



//should output 8

// ________________________________________________________________________________________________
// Challenge 7
/* Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!
 */
console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);

function myReduce<T, U>(
    array: T[],
    callback: (accumulator: U, current: T) => U,
    initialValue: U
): U {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
}

function intersection<T>(...arrays: T[][]): T[] {
    if (arrays.length === 0)  return [];
    
     return reduce<T[],T[]>(
        arrays,
        (acc, currentArray) => 
            acc.filter(value => currentArray.includes(value)),
        arrays[0]
    );
    
}
    
// should log: [5, 15]

// ________________________________________________________________________________________________
// Challenge 8
/* 
Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
*/

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));


function union <T>(...arrays: T[]): T[] {
    return reduce(
        arrays,
        (acc, currentArray) => {
            forEach(currentArray, (value) => {
                if (!acc.includes(value)) {
                    acc.push(value);
                }
            });
            return acc;
        },
        [] as T[]
    );
}
// should log: [5, 10, 15, 88, 1, 7, 100]