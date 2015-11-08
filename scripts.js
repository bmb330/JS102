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
