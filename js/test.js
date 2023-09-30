// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
// const fruits = ["apple", "banana", "cherry", "date"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// const masiv = ["apple", "banana", "pear"];
// for (const fruit of masiv) {
//   console.log(fruit);
// }
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// припиняється і управління передається на наступну ітерацію.
// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]
// const numbers = [];

// console.log(numbers.pop());
// const numbers = [];

// numbers.push(2, 3, 10);
// console.log(numbers);
// const scores = [1, 2, 3, 4, 5];

// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// // const deletedScores = scores.splice(0, 3);
// // console.log(scores); // [4, 5]
// console.log(scores.slice(0, 3)); // [1, 2, 3]
// let arr = [];

// console.log(fillArray(2, 10));

// function fillArray(min, max) {
//   for (let i = min; i <= max; i += 2) {
//     console.log(arr);
//     return arr.push(i);
//   }
// }
// function findMaxNumber(arrayNumbers) {
//   let maxNumber = arrayNumbers[0];
//   for (const number of arrayNumbers) {
//     if (number > maxNumber) {
//       maxNumber = number;
//     }
//   }
//   console.log(`Max number - ${maxNumber}`);
// }
// // findMaxNumber([1, 3, 10, 555]);
// console.log(typeof NaN);
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'
// // const unknownKey = "nameOfAuthor";
// // const bookAuthor = book[unknownKey];
// // console.log(bookAuthor);
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']
// console.log(book);
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
//   reviews: {
//     olys: "jn,hbgmvfcdg",
//     kolya: "p/,kmjunhygt",
//   },
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
//   reviews: {
//     olys: "jn,hbgmvfcdg",
//     kolya: "p/,kmjunhygt",
//   },
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }
//
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// // const third = { propB: 20, ...first, ...second };
// // console.log(third); // { propA: 5, propB: 10, propC: 15 }
// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// // const third = { ...first, ...second };
// // console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 } не вірний приклад з конспекту
// // {propC: 50, propD: 20, propA: 5, propB: 10,} вірно так
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 } не вірно
// // {propB: 10, propA: 5, propC: 15} вірно так
// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смішної людини",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }
// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   let keys = [];
//   if (object.hasOwnProperty(key)) {
//     for (const key in object) {
//       keys.push(key);
//     }
//   }
//   for (let i = 0; i < keys.length; i++) {
//     propCount += i;
//   }
//   // Change code above this line
//   return propCount;
// }
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];
// console.log(books);
// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   //   Назва;
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }
// function multiply(...kaka) {
//   console.log(kaka); // масив усіх аргументів
// }

// // multiply(1, 2);
// // multiply(1, 2, 3);
// // multiply(1, 2, 3, 4);
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let total = 0;
//   for (let product of products) {
//     if (productName === product.name) {
//       total = product.price * product.quantity;
//     }
//   }
//   console.log(total);
//   return total;

//   // Change code above this line
// }
// calculateTotalPrice("kaka");
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],

//   order(pizzaName, onSuccess, onError) {
//     if (!pizzaPalace.pizzas.includes(pizzaName)) {
//       return onError(error);
//     }
//     return onSuccess(pizzaName);
//   },
// };
// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.find((option) => option.label === "blue")); // { label: 'blue', color: '#2196F3' }
// console.log(colorPickerOptions.find(({ label }) => label === "pink")); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find((option) => option.label === "white"); // undefined
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості tags
// // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);
// const getActiveUsers = (users) => {
//   return users.filter((user) => user.isActive);
// };
// console.log(
//   getActiveUsers([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39,
//     },
//   ])
// );
// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key.
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

// const user = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };
// function checkKeyInObject(obj, key) {
//   // return Object.key(obj).includes(key);
//   return obj.hasOwnProperty(key);
// }
// console.log(checkKeyInObject(user, "name"));
// console.log(checkKeyInObject(user, "id"));

// Додати метод getinfo в об'єкт user, який повертатиме інформацію
// про користувача у форматі:
// `Name: Peter. Surname: Parker. Age: 22. Position: spider-man.`

// const user = {
//   name: "Peter",
//   surname: "Parker",
//   age: 22,
//   position: "spider-man",
// };
// user.getinfo = function () {
//   `Name: ${this.name} Peter. Surname: Parker. Age: 22. Position: spider-man.`;
// };
// const user2 = user;
// user2.getinfo();

// Створіть об'єкт calculator із трьома методами:
//read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
//sum() - повертає суму збережених значень
//mult() - перемножує збережені значення та повертає результат
// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };
// calculator.read(2, 3);
// console.log(calculator.sum());
// console.log(calculator.mult());

// Напишіть функцію updateObject, яка приймає об'єкт і ключі (ключів може бути довільна кількість)
//які необхідно видалити з об'єкту.
//Функція повертає новий об'єкт без зазначених параметрів.
//Очікуваний результат ({a: 1, b: 2}, 'b') => {a: 1
// const updateObject = (obj, ...keys) => {
//   const newObj = { ...obj };
//   console.log(keys);
//   keys.forEach((el) => delete newObj[el]);
//   return newObj;
// };
// console.log(updateObject({ a: 1, b: 2, c: 3, i: 5 }, "b", "a"));
// console.log(updateObject({ a: 1, b: 2, c: 3, i: 5 }, "i", "c"));

//  Напишіть функцію, яка приймає як параметр об'єкт
//і повертає масив значень у форматі [[key, value], [key, value], ...]
// де key і value - відповідно ключ і значення переданного об'екту.
// const user = {
//   name: "John",
//   surName: "Stones",
//   age: 20,
//   hobby: "tenis",
//   haveCar: true,
//   merried: false,
// };
// function changeObject(object) {
//   return Object.entries(object);
// }
// console.log(changeObject(user));

// Напишіть функцію getPropertyValues(), яка приймає масив об'єктів
// та ключ, і повертає масив значень цього ключа у кожному об'єкті

// const myArr = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 },
//   { name: "Bob", age: 40 },
// ];
// function getPropertyValues(array, key) {
//   const result = array.map((el) => el[key]);
//   return result;
// }
// console.log(getPropertyValues(myArr, "age"));

// Виконайте сортування масиву цін за спаданням та зростанням.
// const prices = [1000, 240, 670, 360, 89, 20];
// const upPrices = [...prices].sort((a, b) => a - b);
// console.log(upPrices);
// const downPrices = [...prices].sort((a, b) => b - a);
// console.log(downPrices);

// Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
// перебирає масив і додає до кожного ім'я привітання.
// Функція повертає новий масив  ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]

// const names = ["Ivan", "Maria", "Anna"];
// function sayHi(arr) {
//   // return arr.map((el) => el + " привіт!");
//   return arr.map((el) => `${el} привіт`);
// }
// console.log(sayHi(names));

// Напишіть стрілочну функцію, яка буде перевіряти
// чи містить даний масив, хоча б одне число більше 20.

// const numbers = [20, 16, 11, 13, 15, 30];
// const checkNumber = numbers.some((el) => el > 20);
// console.log(checkNumber);

// Напишіть стрілочну функцію яка буд перевіряти чи всі студенти
// у нашому масиві старші 18 років.

// const students = [
//   { name: "Alex", age: 17 },
//   { name: "Stas", age: 18 },
//   { name: "Mike", age: 22 },
//   { name: "Den", age: 20 },
// ];
// function checkAge() {
//   const result = students.every((el) => el.age >= 18);
//   return result;
// }
// console.log(checkAge());

// function filterAge() {
//   const result2 = students.filter((el) => el.age >= 18);
//   return result2;
// }
// console.log(filterAge());

// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];
// const allTopics = courses
//   .flatMap((course) => course.topics)
//   .filter((course, index, array) => array.indexOf(course) === index);
// console.log(allTopics);

// у нас є масив користувачів, кожен з яких має поля id та name.
//  Давайте знайдемо той де id = 1.

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];
// function checkId(obj) {
//   const result = obj.find(() => user.id === 1);
//   return result;
// }
// console.log(result);

// const friends = [
//   {
//     passport: "03005988",
//     name: "Joseph Francis Tribbiani Jr",
//     age: 32,
//     sex: "m",
//   },
//   { passport: "03005989", name: "Chandler Muriel Bing", age: 33, sex: "m" },
//   { passport: "03005990", name: "Ross Eustace Geller", age: 33, sex: "m" },
//   { passport: "03005991", name: "Rachel Karen Green", age: 31, sex: "f" },
//   { passport: "03005992", name: "Monica Geller", age: 31, sex: "f" },
//   { passport: "03005993", name: "Phoebe Buffay", age: 34, sex: "f" },
// ];
// Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.
// function getTotalBoysYears(arr) {
//   return arr
//     .filter((friend) => friend.sex === "m")
//     .reduce((acc, friend) => {
//       return acc + friend.age;
//     }, 0);
// }
// console.log(getTotalBoysYears(friends));

// Маємо масив об'єктів, який представляє список замовлень:
// Завдання: Перевірте, чи всі замовлення виконані, і поверніть список товарів з усіх виконаних замовлень.

// const orders = [
//   { id: 1, products: ["Milk", "Bread"], status: "completed" },
//   { id: 2, products: ["Eggs", "Juice"], status: "processing" },
//   { id: 3, products: ["Pasta", "Spices"], status: "completed" },
// ];
// const completed = orders.every((order) => order.status === "completed");
// console.log(completed);

// const arrayCompleted = orders
//   .filter((oder) => oder.status === "completed")
//   .flatMap((order) => order.products);
// console.log(arrayCompleted);

// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.
// const products = [
//   { name: "Milk", price: 20 },
//   { name: "Bread", price: 10 },
//   { name: "Eggs", price: 15 },
//   { name: "cheese", price: 155 },
//   { name: "juce", price: 45 },
// ];
// const sum = products
//   .filter((product) => product.price > 10)
//   .reduce((acc, product) => {
//     return acc + product.price;
//   }, 0);
// console.log(sum);
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return `Error! Price exceeds the maximum.`;
//     }
//     return `Success! Price is within acceptable limits`;
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
// console.log(Car.checkPrice(64000));

// Є об'єкт і функція для підрахунку суми чисел.
// Виведіть у консоль результат виконання функції, якщо a = 3, b = 5.

// var obj = { num: 2 };

// function add(a, b) {
//   return this.num + a + b;
// }
// console.log(add.call(obj, 3, 5));
// console.log(add.apply(obj, [3, 5]));

// const checkBind = add.bind(obj, 3, 5);
// console.log(checkBind());

// Є два об'єкти, які описують деякі характеристики телефонів.
// Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// передаючи аргументом країну-виробник телефону.
// "HUAWEI" - "China", "SAMSUNG" - "South Korea".

// const tel = {
//   regNumber: "AE8345FEDAS",
//   brand: "HUAWEI",
//   showInfo(country) {
//     console.log(`${country} ${this.regNumber} ${this.brand}`);
//   },
// };

// const tel_2 = {
//   regNumber: "AO8518FEGHT",
//   brand: "SAMSUNG",
// };

// tel.showInfo(`China`);

// const checkTel2 = tel.showInfo.bind(tel_2, `South Korea`);
// checkTel2();

// 1. Створіть об'єкт car з трьома властивостями
// carBrand: "Audi Q3"
// price: 23000
// метод getData() котрий буде логувати рядок :"Audi Q3 за 23000 $"

// 2. Напишіть функцію makeMessage(callback), котра отримує в якості параметра
// callback-функцію getData() і логує повідомлення "Ви замовили ${callback()}"

// const car = {
//   carBrand: "Audi Q3",
//   price: 23000,
//   getData() {
//     return `${this.carBrand} за ${this.price} $`;
//   },
// };

// function makeMessage(callback) {
//   console.log(`Ви замовили ${callback()}`);
// }
// makeMessage(car.getData.bind(car));

// Напишіть код таким чином, щоб об'єкт apples став прототипом для об'єкта fuji.
// Перевірте чи став об'єкт apples  прототипом для об'єкта fuji.
// Додайте об'єкту fuji властивість color: 'pink'  і виведіть його у консоль.
// Виведіть у консоль значення властивості type для об'єкту fuji.
// Перевірте і виведіть у консоль чи є властивість vitamins власною властивістю об'єкту apples.
// Перевірте і виведіть у консоль чи є властивість cookingMethod власною властивістю об'єкту fuji.
// const apples = {
//   type: "fruit",
//   cookingMethod: ["jam", "juice", "baked", "dried", "fresh"],
//   vitamins: ["A", "B1", "B2", "E"],
// };
// const fuji = Object.create(apples);
// console.log(apples.isPrototypeOf(fuji));
// fuji.color = "pink";
// console.log(fuji.color);
// console.log(fuji.type);
// console.log(apples.hasOwnProperty`vitamins`);
// console.log(fuji.hasOwnProperty`cookingMethod`);

// Створи клас для калькулятора, який має такі методи:
// метод number, який набуває початкового значення для наступних операцій
// метод getResult, який повертає фінальний результат усіх операцій, проведених з числом
// методи add, substruct, divide, multiply
// Об'єкт класу приймає число і може проводити з ним
// Послідовні операції у вигляді ланцюжка

// class Calculator {
//   constructor() {
//     this.result = 0;
//   }

//   number(number) {
//     this.result = number;
//     return this;
//   }
//   add(number) {
//     this.result += number;
//     return this;
//   }

//   substruct(number) {
//     this.result -= number;
//     return this;
//   }

//   divide(number) {
//     this.result /= number;
//     return this;
//   }
//   multiply(number) {
//     this.result *= number;
//     return this;
//   }
//   getResult() {
//     return this;
//   }
// }
// const operation = new Calculator();
// const result = operation.number(100).divide(5).getResult();
// console.log(result);

//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calculateArea() {
//     return this.height * this.width;
//   }
// }
// const exampl = new Rectangle(12, 10);
// console.log(exampl.calculateArea());

// Створіть клас Car, який має конструктор для зберігання марки та
// року виробництва автомобіля. Додайте метод, який обчислює вік автомобіля
// на основі поточного року та року виробництва і виведе в кнсоль рядок `Вік автомобіля: age років`

// class Car {
//   conctructor(model, year) {
//     this.model = model;
//     this.year = year;
//   }
//   calculAge(currentYear) {
//     const age = currentYear - this.year;
//     console.log(`Вік автомобіля: ${age} років`);
//   }
// }

// const currentYear = new Date().getFullYear();
// console.log(currentYear);

// const car1 = new Car("ford", 2006);
// car1.calculAge(currentYear);

//Напиши клас Client який створює об'єкт
//з ​​властивостями login, email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   get email() {
//     return this.#email;
//   }
//   set login(newLogin) {
//     return (this.#login = newLogin);
//   }
//   set email(newEmail) {
//     return (this.#email = newEmail);
//   }
// }
// const vasy = new Client("hero", "exampl@email.com");
// console.log(vasy.login);
// console.log(vasy.email);
// vasy.login = "super";
// console.log(vasy.login);

// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.
// class Phone {
//   static MAX_PRICE = 40000;
//   #price;
//   constructor(price) {
//     this.#price = price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     if (newPrice <= Phone.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
// }
// const phone1 = new Phone(20000);
// console.log(phone1);
// console.log(phone1.price);
// phone1.price = 35000;
// console.log(phone1.price);
// phone1.price = 55000;
// console.log(phone1.price);

// Створіть клас BankAccount, який має конструктор для зберігання
// номеру рахунку та балансу.
// Додайте методи:
// withdraw - метод для зняття готівки. Отримує в якості аргументу
// суму готівки котрку потрібно зняти. Готівку можна зняти за умови,
// що баланс більше або дорівнює сумі, котру хоче зняти користувач.
// Виводить повідомлення: `Знято 100 грн. Залишок на рахунку: 3000 грн.`
// або "Недостатньо коштів на рахунку."
// deposit - метод для пововнення балансу. Отримує в якості аргументу
// суму котру користувач хоче покласти на рахунок.
// Виводить повідомлення: `Поповнено 100 грн. Залишок на рахунку: 3100 грн.`
// checkBalance - метод для перевірки балансу.
// Виводить повідомлення `Залишок на рахунку: 3100 грн.`
