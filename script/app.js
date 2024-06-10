
let userAge = +prompt('Введите свой возраст')

if (isNaN(userAge)) {
    alert('Error !')
}else{


    if (userAge <= 18) {
        alert('Вы еще молоды, Вам нужно учиться')
    }else if (userAge <= 50) {
        alert('Вам нужно работать')   
    }else if (userAge <= 59) {
        alert('Вам скоро на пенсию')
    }else if (userAge <= 100) {
        alert('Вы пенсионер')
    }else{
        alert('Как вы выжили?')
    }

}


let hour = +prompt('Введите время')

if (isNaN(hour) || hour < 0 || hour > 23) {
    alert("Неверное время. Введите число от 0 до 23.");
}

switch (true) {
    case (hour >= 0 && hour <= 6):
        alert(`${hour} часа ночи`);
        break;
    case (hour >= 7 && hour <= 10):
        alert(`${hour} часов утра`);
        break;
    case (hour >= 11 && hour <= 17):
        alert(`${hour - 12} часа дня`);
        break;
    case (hour >= 18 && hour <= 23):
        alert(`${hour - 12} часов вечера`);
        break;
}


let fisrtMiddleNumber = +prompt('Введите первое число')
let secondMiddleNumber = +prompt('Введите первое число')
let thirdMiddleNumber = +prompt('Введите первое число')


let min, max, middle;

min = Math.min(fisrtMiddleNumber, secondMiddleNumber, thirdMiddleNumber);

max = Math.max(fisrtMiddleNumber, secondMiddleNumber, thirdMiddleNumber);

if ((fisrtMiddleNumber > min && fisrtMiddleNumber < max)) {
    middle = a;
} else if ((secondMiddleNumber > min && secondMiddleNumber < max)) {
    middle = secondMiddleNumber;
} else {
    middle = thirdMiddleNumber;
}

alert(`Среднее число: ${middle}`);






