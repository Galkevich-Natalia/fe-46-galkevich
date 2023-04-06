//NORMAL level

//TODO: Task 1
//Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.


const food = {
    fruit: "apple",
    color: "green",
};

delete food.fruit;
delete food.color;

console.log("Task 1", food);


//TODO: Task 2
//Создать любой обьект с двумя ключами и любыми значениями в них,
//а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true


const user = {
    name: "Алексей",
    age: "30",
};

alert("age" in user);
console.log("Task 2", "age" in user);


//TODO: Task 3 
//Дан объект ниже. C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.


const student = {
    name: "John",
    age: 19,
    isHappy: true,
};

for (let key in student) {
    console.log("Task 3", key, student[key]);
};


//TODO: Task 4
//Дан объект ниже. Вывести в консоль слово красный и синий.


const colors = {
    "ru pum pu ru rum": {
        red: "красный",
        green: "зелёный",
        blue: "синий",
    },
};

console.log("Task 4", colors["ru pum pu ru rum"].red, colors["ru pum pu ru rum"].blue);


//TODO: Task 5
//Дан объект ниже. Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную.


let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andy: 664,
    alexandra: 199,
};

let sum = 0;
let countEmployees = 0;
let averageSalary = 0;


for(let key in salaries) {

    sum += salaries[key];
    countEmployees++;

}

averageSalary = sum / countEmployees;

alert(averageSalary);
console.log("Task 5", averageSalary);


//TODO: Task 6 
//Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект.
//Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение Добро пожалоВать.


let userData = {
    login: prompt("Введите логин:", ),
    password: prompt("Введите пароль:", ),
};

let userDataConfirm = {
    login: prompt("Подтвердите ваш логин:", ),
    password: prompt("Подтвердите ваш пароль:", ),
}

function checkUserData(userData, userDataConfirm) {

    let result = 0;

    if (userData.login === userDataConfirm.login && userData.password === userDataConfirm.password) {

        result = console.log("Task 6", "Добро пожаловать");

    } else {

        result = console.log("Task 6", "Неправильно введённый логин или пароль. Попробуйте ещё раз")
    }

    return result;
}

alert(checkUserData(userData, userDataConfirm));


//ADVANCED level


//TODO: Task 2
//Даны два одинаковых обьекта. Сравните их так чтобы они были равны


let student1 = {
    name: "Polina",
    age: 27,
};

let student2 = {
    name: "Polina",
    age: 27,
};

console.log("Advanced Task 2", JSON.stringify(student1) === JSON.stringify(student2));


//TODO: Task 3
//У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы.
//Если попробуем узнать имя мы получим ОШИБКУ.
//Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.


const animals = {
    cat: {
        name: "Енчик",
        age: 3,
    },
    dog: {
        name: "Орео",
        age: 2,
    },
};

//console.log(animals.bird);
//console.log(animals.bird.name);

console.log("Advanced Task 3",animals.bird?.replace('name:',''));