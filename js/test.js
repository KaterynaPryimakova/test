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
function multiply(...kaka) {
  console.log(kaka); // масив усіх аргументів
}

// multiply(1, 2);
// multiply(1, 2, 3);
multiply(1, 2, 3, 4);
