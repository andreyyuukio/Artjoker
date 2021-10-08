
// 1.1 итерируемый объект для получения чисел фибоначчи
function fibonatiArr(last_item){
let arr= []
let fib_range = {
  from: 0,
  to: last_item,
};

fib_range[Symbol.iterator] = function() {
return {
    range_item: this.from,
    last_item: this.to,
    next() {
      if (this.range_item <= this.last_item) {
        return { done: false, value: this.range_item++ };
      } 
      else {
        return { done: true };
      }    
    }
  };
};

let a = 0;
let b = 1;
for (let num of fib_range) {
let c = a + b;
a = b;
b = c;
arr.push(a)

}
return arr;
}
fibonatiArr(11) //- запускаем в консоле функцию с аргументом (число до каого нужно вывести массив чисел фибоначи)


// 1.2 - рекурсивнуя функция получения н-ного члена ряда чисел фибоначи
function fibonatiRecurs(n) {
  return (n <= 1) ?  n : 
  fibonatiRecurs(n - 1) + fibonatiRecurs(n - 2);
}
fibonatiRecurs(12); // - при вызове в консоле возвращает 12-й член ряда фибоначи (233)


//  1.3 Мемоизированная функция для нахождения н-ного члена ряда Фибоначи
function fibonatiRecurs(n) {
  let resultFibonati;
  return resultFibonati =  (n <= 1) ?  n : 
  fibonatiRecurs(n - 1) + fibonatiRecurs(n - 2);   
};

function cacheFib(func) {
  let cache = new Map();
  return function(resultFibonati) {
  if (cache.has(resultFibonati)) {    // если кеш содержит такой такое число,
    return cache.get(resultFibonati); // получаем результат из него
  }
  let result = func(resultFibonati); //либо вызываем функцию
  cache.set(resultFibonati, result); // кешируем результат
  //console.log(resultFibonati + "set in cash") // проверка на запись в кеш
  return result;
  };
};

fibonatiRecurs = cacheFib(fibonatiRecurs);
console.log(fibonatiRecurs(44))


//Задача 2 Реализовать вычисление, периметра/площади, для треугольника, прямоугольника и круга. Реализовать с помощью функций и с помощью классов.

function triangleArea(firstSide, secondSide, thirdSide){
  let halfPerimetr = (firstSide + b + c)/2; // вычисдяем полупериметр
  let triangleS =  Math.sqrt(halfPerimetr*(halfPerimetr - firstSide)*(halfPerimetr - secondSide)*(halfPerimetr - thirdSide));//формула Герона для любого треуголтника со всеми известными сторонами
  let result = triangleS.toFixed(2)//округление результата до десятых долей
  return (firstSide > 0 && secondSide > 0 && thirdSide > 0) ? result : alert("this is impossible triangle"); // проверяем правильность введенных значений и возвращаем результат
}
console.log(triangleArea(10, 5, 7));
console.log(triangleArea(10, -5, 7));

let trianglePerimetr = (firstSide, secondSide, thirdSide) => firstSide + secondSide + thirdSide; //вычисление периметра треугольника
console.log(trianglePerimetr(3, 5, 10))


/*Функции вычисления площади и периметра прямоугольника*/

let squareArea = (width, height) => width * height; // площадь прямоугольника
console.log(squareArea(10, 15))

let squarePerimetr = (width, b) => width*2 + height*2; // периметр прямоугольника
console.log(squareArea(10, 15))


/*Функции вычисления площади и периметра круга*/
let circleArea = (radius) =>  (Math.pow(radius, 2) * Math.PI).toFixed(4);
console.log(circleArea(10))

let circlePerimetr = (radius) => (Math.PI * 2 * radius).toFixed(4);
console.log(circlePerimetra(10))


/*  Вычисдения площади и периметра треугольника  с помощью классов  */
class triangleBase{
	constructor(firstSide, secondSide, thirdSide){
		this.firstSide = firstSide;
		this.secondSide = secondSide;
		this.thirdSide = thirdSide;		
		this.perimetr = firstSide + secondSide + thirdSide;// периметр треуголика
		this.halfPerimetr = this.perimetr / 2 // вычисляем полупериметр для формулы Герона
	}

  calckArea(){
	 return Math.sqrt(this.halfPerimetr*(this.halfPerimetr - this.firstSide)*(this.halfPerimetr - this.secondSide)*(this.halfPerimetr - this.thirdSide))
 	}
	get area() {
  	return (this.calckArea()).toFixed(2)// округляем результат вычисления площади до сотых
	}
}
let triangle = new triangleBase(11, 5, 7)
console.log("Периметр треугольника: " + triangle.perimetr + " " + "Площадь треугольника: " + " / " + triangle.area)


/*  Вычисдения площади и периметра прямоугольника с помощью классов  */
class Square {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.area = height * width;
    this.perimetr = height + width;
  } 
}

let square = new Square(10, 10);
console.log("Периметр прямоугольника: " + square.perimetr + " / " + "Площадь прямоугольника: " + square.area); 


/*  Вычисдения площади и периметра круга с помощью классов  */
class circleBase{
	constructor(radius){
		this.radius = radius;				
	}
	get perimetr(){
		return(2 * Math.PI * this.radius).toFixed(4);	
	}
	get area(){
		return Math.pow(Math.PI * this.radius, 2).toFixed(4)
	}
}
let circle = new circleBase(11);
console.log("Периметр круга: " + circle.perimetr + " " + "Площадь круга: " + circle.area)


//Задача 3

/*Найти минимальный, максимальный элемент массива. 
Подсчитать количество нулевых, положительных и отрицательных элементов массива. 
Написать соответствующие рекурсивные функции.*/

function getMaxItem(array){
	let maxNum = array[0];
	for(let item of array){
	maxNum = (item > maxNum) ? item : maxNum;// находим максимальный элемент массива
	}
	return maxNum
}
console.log(getMaxItem([1, 2, 3, 10, 0, 11, 0, 15, 16, 0, -2, 41, 2, 31, 39, -1, 6]))


function getMinValue(array){
    let minItem = array[0];
    for(let item of array ){
    	minItem = (item < minItem ) ? item : minItem; // находим минимальный элемент массива
    }   
    return minItem;
}
console.log(getMinValue([1, 2, 3, 10, 0, 11, 0, 15, 16, 0, -2, 41, 2, 31, 39, -1, 6]))


//let array = [1, 2, 3, 10, 0, 11, 0, 15, 16, 0, -2, 41, 2, 31, 39, -1, 6]

function getNullValue(array){
let arrayOfNull = [];
	for (let item of array){
  arrayOfNull.length = (item == 0) ? arrayOfNull.push(item) : arrayOfNull.length; //подмассив с нудевыми элементами
  }
	return arrayOfNull.length // количество нулевых эл-тов в изначальном массиве
}
console.log(getNullValue([1, 2, 3, 10, 0, 11, 0, 15, 16, 0, -2, 41, 2, 31, 39, -1, 6]))


function negativeNum(array){
	let arrayOfNegative = [];
	for (let item of array){
		arrayOfNegative.length = (item <= 0) ? arrayOfNegative.push(item) : arrayOfNegative.length
	}
return arrayOfNegative.length // количество отрицательных эл-тов в изначальном массиве
}
console.log(negativeNum([1, 2, 3, 10, 0, 11, 0, 15, 16, 0, -2, 41, 2, 31, 39, -1, 6]))


function positiveNum(array){
	let arrayOfPositive = [];
	for (let item of array){
		arrayOfPositive.length = (item >= 0) ? arrayOfPositive.push(item) : arrayOfPositive.length
	}
return arrayOfPositive.length // количество положительных эл-тов в изначальном массиве
}
console.log(positiveNum([1, 2, 3, 10, 0, 11, 0, 15, 16, 0, -2, 41, 2, 31, 39, -1, 6]))


/* рукурсивная функция для поиска макчимального числа */

function findMaxNum(array){
  let maxNum = 0;   
  for(let i = 0; i < array.length; i++){      
    if ( array[i] > maxNum ){
      maxNum = array[i];
    }
  }
  return maxNum;
}
console.log(findMaxNum([1, 2, 3, 10, 0, 11, 0, 15, 16, 0, -2, 41, 2, 31, 39, -1, 6]))


/* рукурсивная функция для поиска минимального числа */
function findMinNum(array){
	let minNum = Infinity;
	for(let i = 0; i < array.length; i++){
 		minNum = (array[i] < minNum) ? array[i] : minNum;
	}
    return minNum;
}
console.log(findMinNum([1, 2, 3, 10, 0, 11, 0, 15, 16, 0, -2, 41, 2, 31, 39, -1, 6]))


/* рукурсивная функция для поиска положительных чисел */
function findPositiveNum(array){
for(let i = 0; i<array.length; i++){
	if(array[i] <= 0){
		array.splice(i, 1);
    findPositiveNum(array);
	}
}	
	return array.length // возвращает количество положительных чисел подмассива 
}
console.log(findPositiveNum([1, 2, 3, 10, 0, 11, 0, -15, 16, 0, -2, 41, 2, 31, 39, -1, 6]))


/* рукурсивная функция для поиска отрицательных чисел */
function findNegativeNum(array){
for(let i = 0; i < array.length; i++){
	if(array[i] >= 0){
		array.splice(i, 1)
    findNegativeNum(array)
	}
}	
	return array.length // возвращает количество отрицательных чисел подмассива 

}
console.log(findNegativeNum([1, 2, 3, 10, 0, 11, 0, -15, 16, 0, -2, 41, 2, 31, 39, -1, 6]))


/*Поиск нулевых значений с помощью рекурсии*/
function findNullNum(array){
for(let i = 0; i < array.length; i++){
	if(array[i] == 0){
		array.splice(i, 1)
    findNegativeNum(array)
	}
}	
	return array.length // возвращает количество нулевыъ эл-тов подмассива

}
console.log(findNullNum([1, 2, 3, 10, 0, 11, 0, -15, 16, 0, -2, 41, 2, 31, 39, -1, 6]))


/*Подсчет элементов массива*/

function recursiveArrayCount(arr, count) {
  if (arr.length == 0) {
    return 0;
  } else {
    arr.pop();
    return count + recursiveArrayCount(arr, count);
  }
}

let myArray = [1, 10, 23, 11, 4, 48, 88];

console.log(recursiveArrayCount(myArray, 1));


// Задача 4  Написать функцию преобразования целого числа из десятичной системы счисления в двоичную и наоборот.
function toBinary(number){
    return (number >>> 0).toString(2); // перевод в двоичную систему
}
console.log(toBinary(10))


function toDecimal(number) {
  let parsed = parseInt(number, 2); // перевод из двоичной системы
 
  if (!isNaN(parsed)) { return parsed; }
  return "Not Number";
}
console.log(toDecimal(10011))


/* Задача 5 Посчитать факториал числа. Написать рекурсивную функцию вычисления факториала числа. 
Написать мемоизированную функцию высшего порядка для вычисления факториала.*/

function factorial(number){
	let result = (number != 1) ? 
	number * factorial(number - 1) : number;
	return result;
}
console.log(factorial(5))


/* мемоизированая функция для счисления факториала*/
function factorial(number){
	let result = (number != 1) ? 
	number * factorial(number - 1) : number;
	return result;
}

function cacheFactorial(func){
  let cache = new Map();
  return function(resultOfFactorial) {
    if (cache.has(resultOfFactorial)) {    // если кеш содержит результат факториала числа,
      return cache.get(resultOfFactorial); // получаем результат из него
      
    }
    let result = func(resultOfFactorial); //либо вызываем функцию
    cache.set(resultOfFactorial, result); // кешируем результат
    //console.log(resultOfFactoriali + "set in cash") // проверка на запись в кеш
    return result;
  };
}

factorial = cacheFactorial(factorial);
console.log(factorial(5))


// Задача 6 Транспонировать матрицу, сложить две матрицы.
let matrix = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];
let newArray = matrix.map((element, i) => element.map((element2, j) => matrix[j][i]));
console.log(newArray);


/*Сложение матриц*/

function sumMatrix(firstMatrix, secondMatrix){   
    let sumOfMatrix = [];
    for (let i = 0; i < firstMatrix.length; i++){
    	 sumOfMatrix[ i ] = [];
       for (let j = 0; j < firstMatrix[0].length; j++){
      	 sumOfMatrix[i][j] = firstMatrix[i][j]+secondMatrix[i][j];
       }
       
     }
    return sumOfMatrix;
}
let firstMatrix = [
[1, 2, 34],
[5, 6, 145],
]
let secondMatrix = [
[5, -2, -57],
[0, 7, 784],
]
console.log(sumMatrix(firstMatrix, secondMatrix)) 


/* Задача 7 - Удалить из матрицы тот столбец который имеет хотя бы один нулевой элемент. 
Аналогично для строки.*/

let matrix = [
[1, 2, 3, 4, 5],
[5, 0, 4, 6, 3],
[0, 1, 1, 0, 3],
[1, 1, 2, 3, 4],
]
function deleteString(matrix){ 
  let indexOfNull = [];
  for (let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
        if (matrix[i][j] == 0 && !indexOfNull.includes(j)){         
          indexOfNull.push(j);          
        }        
     }
   }
   function compareNumeric(a, b) {
  return (a < b) ? 1 : (a > b) ? -1 : (a == b) ? 0  : "Error"  
}
indexOfNull.sort(compareNumeric);
    for (let i = 0; i < matrix.length; i++){
        for(item of indexOfNull){
          matrix[i].splice(item, 1)
          //console.log(item)
      }    
   }

return matrix
}
console.log(deleteString(matrix));


/* Удаление строки матрицы с 0*/
let matrix= [
[1, 2, 3, 4, 5],
[5, 0, 4, 6, 3],
[0, 1, 1, 0, 3],
[1, 1, 2, 3, 4],
]
function deleteString(matrix){
  for (let i = 0; i < matrix.length; i++){
		if (matrix[i].includes(0)){
    matrix.splice(i, 1)
    i = 0;
    }  
  }
  return matrix
}
console.log(deleteString(matrix));


/* Задача 8 Написать свою реализацию функций bind, call.
 Новая реализация должна по функционалу работать аналогично как и соответствующие стандартные функции. 
 Без использования стандартных функций.*/
/* bind */
let user = {
  name: "Name",
  sername: "Sername"  
};

function func() {
  alert(this.name);  
}

function newBind(targetFn, context) {
  return function(...args) {
    const dateString = Date.now().toString(); // уникальная строка
    context[dateString] = targetFn; // помещаем в значение уникального поля нужную функцию
    let result = context[dateString](); // вызов функции в значеии уникального поля
   // delete context[dateString]; // после отработи функции удаляем её из объекта
    return result; // возращаем результат функции
  }
}
newBind(func, user)() 



/*finction.call*/

function personName() {
  alert(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

function myCall(targetFn, context) {
  const dateString = Date.now().toString();
  context[dateString] = targetFn;
  let res = context[dateString]();
  delete context[dateString];
  return res;
}
myCall(personName, admin)


 /* Задача 9 Написать свою реализацию функций для работы с массивами, которые являются аналогами следующих функций: 
 map, filter, reduce,  forEach. 
 Без использования стандартных функций.*/

/*forEach*/
let number = [1, 2, 3, 4, 5];
let newArray = [];
function forEachh(array){
  for(let item of array){
      newArray.push(item*3.14)
  }
  return  newArray

};
console.log(forEachh(number))

/*map*/
let myMap = Array.prototype.map = function(callback){
      let result = [];
      for(let i = 0; i < this.length; i++){
          result.push(callback(this[i]));
      }
      return result;
  };

  let arr = [2,3,4,5,6,7];
  let newArray = arr.myMap((value) => (value * 3.14));

  console.log(newArray);

/*reduce*/
let arr = [2,3,4,5];
let myReduce =  Array.prototype.myReduce = function(callback, initValue){
      let result = initValue || 0;
      for(let i = 0; i < this.length; i++){
          result = callback(this[i], result);
      }

      return result;
  };
  let newArray = arr.myReduce((value, initValue) => value + initValue, 10);
console.log(newArray)

/* filter */
let numberArray = [1, 2, 3, 5, 6, 8, 9, 10, 12, 13];

function myFilter(array){
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
        array.splice(i,1)
        i--
}
}
  return array
}
console.log(myFilter(numberArray))

/* максимальная зарплата */

/*let salaryList = {
  Crown: 1060,
  Annet: 1860,
  Camle: 576,
  Giraffe: 3555,
  Peter: 5764,
  Peteqer: 555,  
}
function getMax(obj){
	let person;
  let salar = 0;
  for(let key in obj){
  	if(obj[key] > salar){
    	salar = obj[key];
      person = key;
    }
  }
  let result = "Самая большая зарпоата у  = " + person + " ; оклад = " + salar
  return result;
}
console.log(getMax(salaryList))*/