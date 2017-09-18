const fs = require('fs');

// fs.readFile('./animals.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//     var animals = data;
//   }
// });

// fs.readFile('./animals.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     // console.log(data);
//     var animals = data;
//     animals.split('\n').filter(animal => animal.startsWith("a")).join('\n');
//     console.log(animals);
//   }
// });

// fs.writeFile('./example.txt', 'a', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file successfully written!");
//   }
// });

// console.log(process.argv[4]);

// process.argv should consist of array of two arguments: the absolute
// paths of the Node executeable and the file.

function filterAnimals(animals, letter) {
  return animals
    .split('\n')
    .filter(animal => animal.startsWith(letter))
    .join('\n');
}
var letter = process.argv[2].toUpperCase();

fs.readFile('./animals.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const animals = filterAnimals(data, letter);

  fs.writeFile(`${letter}_animals.txt`, animals, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`successfully created ${letter}_animals.txt`);
  });
});
