let fam = prompt('Введите Вашу фамилию', 'Иванов');

while (true) {
    if (fam.length<1) {
        fam = prompt('Введите Вашу фамилию', 'Иванов');
    }
    else if (fam.length>10) {
        fam = prompt('Введите Вашу фамилию', 'Иванов');
    }
    else break;
}





let nam = prompt('Введите Ваше имя', 'Иван');

while (true) {
    if (nam.length<1) {
        nam = prompt('Введите Ваше имя', 'Иван');
    }
    else if (nam.length>10) {
        nam = prompt('Введите Ваше имя', 'Иван');
    }
    else break;
}




let patr = prompt('Введите Ваше отчество', 'Иванович');

while (true) {
    if (patr.length<1) {
        patr = prompt('Введите Ваше отчество', 'Иванович');
    }
    else if (patr.length>10) {
        patr = prompt('Введите Ваше отчество', 'Иванович');
    }
    else break;
}





let age = prompt('Сколько Вам лет?');

age = Number(age);

while (true) {
    if (age<1) {
        age = prompt('Введите корректное количество лет.');
    }
    else if (age>120) {
        age = prompt('Введите корректное количество лет.');
    }
    else break;
}





let gender = confirm('Ваш пол мужской?');

if (gender) {
    gender = "мужской";
}
else {
    gender = "женский";
}




if (age >= 65 && gender == 'мужской') {
    pens = "да";
}
else if (age >= 55 && gender == 'женский') {
    pens = "да";
}

else {
    pens = "нет";
}





function sum(a, b) {
    return a + b;
}


let days = sum(age, 5);




alert('Ваше ФИО: ' + fam + ' ' + nam  + ' ' + patr + ' \n' + 'Ваш возраст в годах: ' + age + ' \n' + 'Ваш возраст в днях: ' + age * 365 + '\n' + 'Через 5 лет Вам будет: ' + days + '\n' + 'Ваш пол: ' + gender + '\n' + 'Вы на пенсии: ' + pens);