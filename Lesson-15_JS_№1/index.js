/* NORMAL level */

/* Task 1 */
let x = 20;
let y = 58;
let z = 42;

console.log (x + y + z);


/* Task 2 */
let myAge = 25;
let countSecondsInMinute = 60;
let countMinutesInHour = 60;
let countHoursInDay = 24;
let countDaysInYear = 365;
let myAgeInSeconds = myAge*countSecondsInMinute*countMinutesInHour*countHoursInDay*countDaysInYear;

console.log (myAgeInSeconds);


/* Task 3 */
let count = 42;
let userName = '42';

let countInStringFirstWay = String(count);
let countInStringSecondtWay = '' + count;

console.log (count, countInStringFirstWay, countInStringSecondtWay);


let userNameInNumberFirstWay = +userName;
let userNameInNumberSecondWay = Number(userName);

console.log (userName, userNameInNumberFirstWay, userNameInNumberSecondWay);


/* Task 4 */
let a = 1;
let b = 2;
let c = "белых медведей";

console.log (String(a) + String(b) + ' ' + c);


/* Task 5 */
let access = 'доступ';
let marine = 'морпех';
let frost = 'наледь';
let reproach = 'попрек';
let chopped = 'рубило';
let lengthWords = access + marine + frost + reproach + chopped;

console.log (lengthWords.length);


/* Task 6 */
let promUserName = prompt('Enter user name:', 'Natalia');
let promUserAge = prompt('Enter user age:', '25');

console.log (promUserName, promUserAge);


/* ADVANCED level */

/* Task 1 */

let d = 4;
let e = 3;

console.log (d, e);

d = d + e;
e = d - e;
d = d - e;

console.log(d, e);


/* Task 2 */

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!"
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

console.log (cipher);