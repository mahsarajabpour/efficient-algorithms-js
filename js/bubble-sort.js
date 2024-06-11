// ::::::Bubble Sort::::::

const bubbleSort = (arr) => {
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let saveItem = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = saveItem;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

const bubbleSortArray = [3, 0, 2, 5, -1, 4, 1];

console.log(bubbleSort(bubbleSortArray))