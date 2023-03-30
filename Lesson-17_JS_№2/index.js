// NORMAL level

// TODO: Task 1
let a = 'true';
let b = false;
let c = 17;
let d = undefined;
let e = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);


//TODO: Task 2
let height = 15;
let width = 20;

if (height > width) {
    console.log (height);
} else {
    console.log (width);
}


//TODO: Task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);

console.log (shouldGoToWork);


//TODO: Task 5
let number = prompt("Введите число:")

    if (number % 5 == 0 && number % 3 == 0) {
        console.log ("FizBus");
    } else if (number % 5 == 0) {
        console.log ("Fiz");
    } else if (number % 3 == 0) {
        console.log ("Buz");
    } else {
        console.log (number);
    }
     

//TODO: Task 6
let age = prompt("Введите ваш возраст:");

if (age >= 16 && age <= 18) {
    alert ("Можешь выкурить сигаретку, только маме не говори");
} else if (age > 18) {
    alert ("Попей пивка");
} else if (age < 18) {
    alert ("Пей колу");
} else {
    alert ("age");
}


// TODO: Task 7
let data = prompt("В какую сторону света вы бы хотели отправиться?");

switch(data) {
    case 'юг':
        alert ("на юг пойдешь счастье найдешь");
        break;
    case 'север':
        alert ("на север пойдешь много денег найдешь");
        break;
    case 'запад':
        alert ("на запад пойдешь верного друга найдешь");
        break;
    case 'восток': 
        alert ("на восток пойдешь разработчиком станешь");
        break;
    default:
        alert ("Попробуйте ещё раз");
        break;    
}