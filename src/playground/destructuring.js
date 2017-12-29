// OBJECT DESTRUCTURING ---------------------------------------

// const person = {
//   name: 'Anshul',
//   age: 19,
//   location: {
//     city: 'Delhi',
//     temp: 11
//   }
// };

// // es6 destructuring with default
// const {name = 'Anonymous' ,age} = person;
// console.log(`${name} is ${age}`);

// // with renaming
// const {temp:temperature, city} = person.location;
// console.log(`Its ${temperature} deg in ${city}`);

// // combo
// const {name: firstName = 'Anonymous' ,age:a} = person;
// console.log(`${firstName} is ${a}`);

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}
const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName); // default - Self-Published

// ARRAY DESTRUCTURING ---------------------------------------

const address = ['1299 S Juniper Street', 'Philadelphia',  ,'19738'];

const [, city, state = 'New York'] = address;
console.log(`You are in ${city}, ${state}.`)