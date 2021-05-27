// Написать функцию transformArray(arr, index1, index2, adding), принимающий в качестве аргументов:

// -arr - массив строк, например [“fngp”, ”kgei”, ”fpos”, ”clfw”]
// -index1 и index2 - числа - индексы в массиве (например 2, 3), элементы под которыми нужно поменять 
//  между собой местами (fpos и clfw нужно поменять местами)
// -adding - строка, которую необходимо дописать в конец к каждому элементу массива 

// и возвращающую массив с учетом указанных трансформаций.
// Например, transformArray([“fngp”, ”kgei”, ”fpos”, ”clfw”], 2, 3, “green”) должно вернуть 
// [“fngpgreen”, ”kgeigreen”, ”clfwgreen”, ”fposgreen”]

console.log('---------------------- Task 2.7 --------------------------');
let transformArray = (arr, index1, index2, adding) => {
    arrFourth = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = arrFourth;
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + adding;
    }
    console.log(arr);
}
transformArray(['first', 'second', 'third', 'fourth'], 2, 3, 'zero');