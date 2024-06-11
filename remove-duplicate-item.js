// ::::::Remove duplicate item::::::

const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'am', 'x', 'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj',
    'ak', 'al', 'am', 'an', 'ao', 'ap', 'aq', 'ar'];

const removeDuplicates = (array) => {
    const duplicates = new Set(array);
    return [...duplicates];
}

let result = removeDuplicates(array)
console.log(result);