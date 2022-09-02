let array = [1, 1, 1, 2, 3, 3, 3, 34, 34, 34, 34, 6, 6, 6, 6, 8, 8, 8];

let newUniqueArray = [...new Set(array)];

console.log(newUniqueArray);



/*new Set(array) is a set containing all the values in arr, which duplicates necessarily removed.
Then the spread operator just converts this back into an array.*/