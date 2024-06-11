
const binarySearchArray = [1, 3, 5, 7, 8, 9];

const binarySearch = (array,x)=>{
    let start = 0, end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // If element is present at mid, return True
        if (array[mid] === x) {
            return true;
        }
        // Else look in left or right half accordingly
        else if (array[mid] < x) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

    return false;
}

const x = 6;

const found = binarySearch(binarySearchArray, x);
console.log(found);
