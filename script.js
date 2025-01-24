'use strict'

//Сортировка пузырьком
function bubleSort(arr){
    let len = arr.length - 1
    for (let i = 0; i < len; i++){
        for (let j = 0; j < len; j++){
            if (arr[j] > arr[j + 1]) {
                let temp 
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

//Сортировка выбором
function adjustingTheSelection(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            let temp = arr[minIndex]
            arr[minIndex] = arr[i]
            arr[i] = arr[minIndex]
        }
    }
    return arr
}

//Сортировка вставками
function insertionSort(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        let sorted = i - 1
        while (sorted > -1 && arr[sorted] > arr[sorted + 1]) {
            let temp = arr[sorted]
            arr[sorted] = arr[sorted + 1]
            arr[sorted + 1] = temp
            sorted--
        }
    }
    return arr
}

//Быстрая сортировка или сортировка Хоара
function quickSorting(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let left = [];
    let right = [];
    let pivotIndex = Math.floor(arr.length / 2);
    let pivotValue = arr[pivotIndex];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue; 
        if (arr[i] < pivotValue) {
            left.push(arr[i]); 
        } else {
            right.push(arr[i]); 
        }
    }

    return [...quickSorting(left), pivotValue, ...quickSorting(right)];
}


//Создание массива случайных чисел
let array = []
for (let i = 0; i < 101; i++) {
    array.push(Math.floor(Math.random() * 101))
}

//Вывод отсортированных массивов
console.log(bubleSort(array))

console.log(adjustingTheSelection(array))

console.log(insertionSort(array))

console.log(quickSorting(array))
