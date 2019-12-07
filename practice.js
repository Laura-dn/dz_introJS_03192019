confirm("Мое первое ДЗ по JS. Кру-у-уто!");

//1. Вывод имени
let name = prompt("Пожалуйста, введите Ваше имя:");
alert ("Привет, " + name + "!");

//2. Расчет возраста
const YEAR = 2019;
let birth = prompt("Пожалуйста, укажите год Вашего рождения:");
let age = YEAR - birth;
alert("Вам " + age + " лет (года).");

//3. Периметр квадрата
let lenSquare = prompt ("Задайте длину стороны квадрата:");
let perSq = lenSquare * 4;
alert("Периметр квадрата составляет " + perSq + ".");

//4. Расчет площади круга
let radiusCircle = prompt("Укажите радиус круга");
let areaOfCircle = (radiusCircle * Math.PI).toFixed(2);
alert("Площадь круга составляет: " + areaOfCircle + ".");

//5. Расчет скорости движения
let distance = prompt("Укажите расстояние между двумя городами (км):");
let  timeRoad = prompt("Напишите, за сколько часов хотите доехать:");
let sp = distance / timeRoad;
alert("Вам необходимо ехать со скоростью " + sp + " км/час.");

//6. Конвертор валют
const USD = 24;
const EUR = 26.65;
let entD = prompt("Введите сумму в долларах:");
let conv = entD * USD / EUR;
alert("Вы получите " + conv.toFixed(2) + " евро.");

//7. Количество файлов на флешке
const MB = 1024;
const MYFILE = 820;
let entGb = prompt("Укажите объем флешки в Гб:");
let transf = entGb * MB / MYFILE;
alert("У Вас на флешке поместится " + transf.toFixed() + " файлов размером 820 Мб."); 

//8. Расчет сдачи и шоколадок
let money = prompt("Введите сумму денег:");
let costChoc = prompt("Напишите стоимость одной шоколадки:");
let oddMoney = money % costChoc;
let quantityChoc = (money / costChoc).toFixed();
alert("Вы купите " + quantityChoc + " шоколадок(ки)." + " У Вас останется сдачи " + oddMoney + " грн.");

//9. Обратное число (как-то так)
let nomber = prompt("Напишите любое трёхзначное число:");
let ed, des, sot;
ed = nomber % 10;
des = ((nomber - ed) / 10) % 10;
sot = (((nomber - ed) / 10 - des) / 10) % 10;
alert("Ваше число: " + nomber + ". Обратное число: " + ed + des + sot + ".");

//Чет/нечет
let wholeNumber = prompt("Введите целое число:");
((wholeNumber % 2) > 0) && alert("Ваше число: " + wholeNumber + " нечетное.");
((wholeNumber % 2) == 0) && alert("Ваше число: " + wholeNumber + " четное.");
