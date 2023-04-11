//NORMAL level

//TODO: Task 1
//Дан массив. Выведите в консоль его длину.

const colors = ['red', 'green', 'blue'];
console.log("Task 1", colors.length);


//TODO: Task 2
//Дан массив. Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals = ['monkey', 'dog', 'cat'];

console.log("Task 2", animals.slice(-1));


//TODO: Task 3
//Дан массив. Удалите все элементы в массиве и выведите в консоль полученный результат. Реализуйте решение двумя способами.

//Способ 1
const numbers = [5, 43, 63, 23, 90];

const deleteAllNumbers = numbers.splice(0);
console.log("Task 3-1", numbers);

//Способ 2
for (let i = 0; i < numbers.length; i++) {
    delete numbers[i];
}

console.log("Task 3-2", numbers);


//TODO: Task 4
//Дан массив. 
//Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
//Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
//Полученный результат не забудьте вывести в консоль.

const students = ["Polina", "Dasha", "Masha"];

students.pop();
students.push("Borya");
students.shift();
students.unshift("Andrey");

console.log("Task 4", students);

//TODO: Task 5
//Дан массив. Выведите в консоль все элементы массива. Сначала через цикл for, затем for of, затем forEach.

const cats = ["Gachito", "Tom", "Batman"];

console.log("Task 5 - через for:");
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

console.log("Task 5 - через for ... of:");
for (const value of cats) {
    console.log(value);
    }

console.log("Task 5 - через forEach:");
cats.forEach(element => console.log(element));


//TODO: Task 6
//Соедините два массива чисел в один.
//В полученном массиве попробуйте найти индекс числа 8

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const arr = evenNumbers.concat(oddNumbers);

let searchIndexElement = arr.indexOf(8);

console.log("Task 6 - index числа 8:", searchIndexElement);


//TODO: Task 7
//Дан массив. 
//Наш бинарный массив неполный, в нем явно не хватает единиц.
//Превратите данный массив в строку.

let binary = [0, 0, 0, 0];

let str = binary.join('1');

console.log("Task 7", typeof str, str);


//ADVANCED level

//TODO: Task 1
//Реализуйте функцию которая будет проверять, является ли слово палиндромом.

let string = prompt("Введите слово для проверки: является ли оно палиндромом?");

function isPolindrom (string) {

    const stringArr = [...string];
    const newArr = [];
    
    stringArr.forEach(element => {
        newArr.unshift(element)
    });

    const reversedStringArr = newArr.join('');
    
    return string === reversedStringArr;
}

alert(isPolindrom (string));


//TODO: Task 2
//Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];

const newMatrix = [].concat(...matrix);

function getAverage(newMatrix) {

    let sumNumberNewMatrix = 0;
    let sumAverage = 0;

    for (let i = 0; i < newMatrix.length; i++) {

        sumNumberNewMatrix += newMatrix[i];
    }

    sumAverage = sumNumberNewMatrix / newMatrix.length;

    return sumAverage;
};

console.log("Adv-Task-2",  getAverage(newMatrix));


//TODO: Task 3
//Дан массив. 
//Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. 
//Оба массива затем выведите в консоль.

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];

let pozitiveNumbers = [];
let negativeNumbers = [];

for (number of mixedNumbers) {
    
    if (number >= 0) {
        pozitiveNumbers.push(number);
        
    } else {
        negativeNumbers.push(number);
    }
}

console.log("Adv-Task-3", pozitiveNumbers);
console.log("Adv-Task-3", negativeNumbers);


//TODO: Task 4
//Создать массив длинной не менее 5, из динамически созданных случайных чисел.
//Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив.
//В конце вывести оба массива в консоль.

let randomArr = [];
let randomArrCube = [];

for(let i = 0; i <= 4; i++) {

    randomArr[i] = Math.random();
}

console.log("Adv-Task-4", randomArr);

for (let i in randomArr) {
    randomArrCube.push(randomArr[i]**3);
}
console.log("Adv-Task-4 - inCube", randomArrCube);