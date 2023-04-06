//NORMAL level

//TODO: Task 1

let n = prompt("Введите параметр n:", 100);

function getSum (n) {

    let sum = 0;

        for (let i = 1; i <= n; i++ ) {

            sum += i;
        }
            return sum;
}

alert(getSum(n));

console.log(typeof getSum(n), getSum(n));

			
//TODO: Task 2
		
// Version 1 - более развёрнутое решение с формулами, но пока что работает неверно, к сожалению :(

/*				
let sumCredit = prompt("Введите сумму кредита, который вы хотите получить:", 200000);  

function overpayment(sumCredit) {
                    
    let numberMonth = 60; // 5 лет для кредита = 60 месяцев
    let interestRateInYear = 17;

    let interestRateInMonth = 0; // %-ная ставка в месяц
    let coefficientAnnuity = 0; // коэффициент аннуитета - нужен для дальнейших подсчётов

    let monthPay = 0;
    let overPay = 0;

    interestRateInMonth = interestRateInYear/12/100; 

    coefficientAnnuity = interestRateInMonth * (((1 + interestRateInMonth)**numberMonth)/((1 + interestRateInMonth)**numberMonth)-1);
    
    monthPay = sumCredit*coefficientAnnuity;

    overPay = monthPay*numberMonth-sumCredit;

    console.log(overPay);

}  

alert(overpayment(sumCredit));	
*/

// Version 2 - работает верно

let sumCredit = prompt("Введите сумму кредита, которую вы хотите получить:", 200000);  

function overpayment(sumCredit) {
                    
    let numberMonth = 60; // 5 лет для кредита = 60 месяцев
    //let interestRateInMonth = 0.0141666666667; /* т.е. 1,41666666667% */
    let coefficientAnnuity = 0.02485257576; // коэффициент аннуитета

    let monthPay = 0; // ежемесячный платёж
    let overPay = 0;
   
    monthPay = sumCredit*coefficientAnnuity;

    overPay = monthPay*numberMonth-sumCredit;

    return overPay;
}  

alert(overpayment(sumCredit));

// почему после данного console.log(overPay) завершается чтение кода следующих заданий?
//console.log(overPay); 


//TODO: Task 3
		
let string = prompt("Введите строку:", 'Сейчас за окном идёт дождь');
let positionFrom = prompt("Вырезать символы начиная С позиции:", 7);
let positionTo = prompt("Вырезать символы ДО позиции:", 15);


function trimString (string, positionFrom, positionTo) {

    let result = 0;

    result = string.slice(positionFrom, positionTo);

    return result;
}

alert(trimString (string, positionFrom, positionTo));

console.log(typeof trimString (string, positionFrom, positionTo), trimString (string, positionFrom, positionTo));


//TODO: Task4

let number = prompt("Введите число:", 2021);

function getSumNumbers(number) {

    let sumNumbers = 0;
    let numberInString = "" + number;

    for (let i = 0; i < numberInString.length; i++) {

        sumNumbers += +numberInString[i];
    }

        return sumNumbers;
}

alert(getSumNumbers(number));

console.log(typeof getSumNumbers(number), getSumNumbers(number));
				
			
//TODO: Task 5			

let a = +prompt("Введите первое целое число:");
let b = +prompt("Введите второе целое число:");

function getSumInInterval (a, b) {

    let min = a;
    let max = b;

    let sumAllNumbers = 0;
                    
    if(min === max) {

        sumAllNumbers = min;
        return min;

    } else if (a > b) {

        min = b;
        max = a;
    }
    
    for (let i = min; i <= max; i++) {

        sumAllNumbers += i;
    }

    return sumAllNumbers;
}                 
    
alert(getSumInInterval (a, b));


//TODO: Task 6

function foo() {
    console.log("FOO");
}

function boo() {
    console.log("BOO");
}

let value = false;

//let value = Boolean(prompt("Введите булевое значение:", true));
// Почему, если так задать переменную код работает неправильно? (без приписки Boolean тоже пробовала - тоже неправильно срабатывает)
// И как тогда сделать ввод булевой переменной через prompt корректным, чтобы прогармма отработала правильно?

function fooboo(value, foo, boo) {

    let finish = null;

    if (value === true) {
        finish = foo();
        
    } else {
        finish = boo();
    }

    return finish;
}

fooboo(value, foo, boo);