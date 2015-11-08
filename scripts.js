//Use this file to implement Part One of your project

var animal = {};

animal.username = 'Camel';
animal['tagline'] = 'Hump Day!!!';
animal['noises'] = [];

var loop_count = 0

for(var key in animal) {
  loop_count++;
  
  if (key === 'username') {
    console.log('Hi my name is ' + animal[key]);
  }
  if (key === 'tagline') {
    console.log('I like to say ' + animal[key]);
  }
};

// Part Two

var noiseArray = ['yak'];

noiseArray.unshift('wak');
noiseArray.push('qak');

noiseArray[3] = 'nak';

console.log(noiseArray.length);
console.log(noiseArray.length - 1);
console.log(noiseArray);

animal.noises = noiseArray;

animals = [];

animals.push(animal);

var quackers = animal;

animals.push(quackers);

animals.push({ username: 'Duck', tagline: 'Quack', noises: noiseArray });
animals.push({ username: 'Bird', tagline: 'Chirp', noises: ['chirp', 'tweet'] });

console.log(animals.length);
