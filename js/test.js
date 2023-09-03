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
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
  {
    title: "Сон смішної людини",
    author: "Федір Достоєвський",
    rating: 7.75,
  },
];
for (const book of books) {
  // Об'єкт книги
  //   console.log(book);
  // Назва
  console.log(book.title);
  // Автор
  //   console.log(book.author);
  //   // Рейтинг
  //   console.log(book.rating);
}
const bookNames = [];

for (const book of books) {
  bookNames.push(book.title);
}

console.log(bookNames);

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = (totalRating / books.length).toFixed(2);
console.log(averageRating); // 8.2
