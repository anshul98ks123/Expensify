const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error');
    // resolve({
    //   name: 'Anshul',
    //   age: 19
    // });
    // // ignored
    // resolve('This is 2nd data');
  }, 2000);
  console.log('before');
});

promise.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

console.log('after');