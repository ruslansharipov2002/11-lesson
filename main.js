//17-masala

//  var mergeTwoLists = function(list1, list2) {

// };
//  Input: list1 = [1,2,4], list2 = [1,3,4]
//  Output: [1,1,2,3,4,4]
//  spread opeartori yordami birlashtiring concat ishlatilmasin


// var mergeTwoLists = function (list1, list2) {
//     return [...list1, ...list2].sort((a, b) => a - b);
// };

// var list1 = [1, 2, 4];
// var list2 = [1, 3, 4];
// console.log(mergeTwoLists(list1, list2));

//18-masala

// function moveDuplicates(array) {
//     const duplicates = array.filter((item, index) => array.indexOf(item) !== index);
//     return duplicates;
// }


// let arr = [1, 2, 3, 1, 4, 5, 2, 6, 7, 7, 8];
// const duplicates = moveDuplicates(array);
// console.log(duplicates);


//19- masala


// var reverse = function (x) {
//     const reversed = parseInt(x.toString().split('').reverse().join(''));
//     return reversed;
// };


// let x = 123;
// console.log(reverse(x))


// 20- masala


// function findMiddle(array) {
//     const length = array.length;
//     const middleIndex = Math.floor(length / 2);

//     if (length % 2 === 0) {
//         return (array[middleIndex - 1] + array[middleIndex]) / 2;
//     } else {
//         return array[middleIndex];
//     }
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [1, 2, 3, 4];
// console.log(findMiddle(array1));
// console.log(findMiddle(array2)); 

