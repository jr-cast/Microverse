// reversed string using decremental loop
const reverseString = function (str) {
    let reversed = '';
    for (i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    } return reversed;
}

// // reversed string using built-in functions
// const reverseString = function (str) {
//     // First split() applied to string
//     let splitted = str.split('');

//     // Then, Use reverse() method to reversed created array 
//     let reversed = splitted.reverse();

//     // Use join() to join splitted elements
//     let joinArray = reversed.join('');

//     // return reversed word
//     return joinArray;
// }

// Do not edit below this line
module.exports = reverseString;
