
const arrayStr = process.argv.slice(2);

let arraySum = 0;
let arrayNum = [];

for (i=0; i < arrayStr.length; i++) {
    arrayNum[i] = Number(arrayStr[i]);
    arraySum = arraySum + arrayNum[i];
}

console.log(`Массив: `, arrayNum);
console.log(`Сумма: `, arraySum);
console.log(`Среднее арифметическое: `, (arraySum / arrayNum.length));