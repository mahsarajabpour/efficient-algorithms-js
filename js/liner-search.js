//::::::linear Search::::::

const linerSearch = (array, elementToFind) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elementToFind) {
            return "the element index is: " + i
        }
    }
    return "The element is not in this list."
};

let linerSearchArray = [2, 5, 1, 4, 7, 3];
let elementToFind = 7;
console.log(linerSearch(linerSearchArray, elementToFind));