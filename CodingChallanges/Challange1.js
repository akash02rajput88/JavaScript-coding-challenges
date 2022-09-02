const arr1 = [4, 5, 7, 9, 1];
const arr2 = [8, 5, 2, 9, 1, 4, 7];

//Ques-1 :- Find UNION of two Arrays with Morden JavaScript Approach

const getUnion = () => {
        let unionArray = [...arr1, ...arr2];
        return [...new Set(unionArray)];
};

console.log(getUnion().sort().reverse());