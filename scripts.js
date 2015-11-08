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

// Constructors/Looping

function AnimalMaker(name) {
  return {
    speak: function () {
      console.log("my name is ", name);
    },
    name: name
  };
};

var animalNames = ['Sheep', 'Liger', 'Big Bird'];

var farm = [];

for (var i = 0; i < animalNames.length; i++) {
  farm.push(AnimalMaker(animalNames[i]));
}

// Part Three

function AnimalTestUser(username) {
  var otherArgs = [];
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      otherArgs.push(arguments[i]);
    }
  }

  return {
    username: username,
    otherArgs: otherArgs
  };
};

var testSheep = AnimalTestUser('CottonBall', { 'loves dancing': true }, [1,2,3]);
console.log(testSheep);

function AnimalCreator(username, species, tagline, noises) {
  return {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  };
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);

function addFriend(animal, friend) {
  animal.friends.push(friend.username);
}

addFriend(sheep, animals[3]);
console.log(sheep);

addFriend(sheep, animals[1]);
console.log(sheep);

var myFarm = [
  AnimalCreator('Bird', 'bird', 'Thats all folks', ['tweet']),
  AnimalCreator('Cow', 'cow', 'Grass, Grass, Grass', ['moo']),
  AnimalCreator('Goose', 'bird', 'Layin Eggs', ['quak'])
]

addFriend(myFarm[0], myFarm[1]);
addFriend(myFarm[1], myFarm[0]);
addFriend(myFarm[2], myFarm[1]);

console.log(myFarm);

function addMatchesArray(farm) {
  for (var i = 0; i < farm.length; i++) {
    farm[i].matches = [];
  }
}

addMatchesArray(myFarm); 
console.log(myFarm[0]);

function giveMatches(farm) {
  for (var i = 0; i < farm.length; i++) {
    farm[i].matches.push(farm[i].friends[0]);
  }
}

giveMatches(myFarm); 
console.log(myFarm[0]);

// Nesting
var friends = [];

friends.push(animals[1].username);
friends.push(animals[2].username);

console.log(friends);

var relationships = {};

relationships.friends = friends;

console.log(relationships);
console.log(Object.keys(relationships).length);

var matches = [];
relationships.matches = matches;

relationships.matches.push(relationships.friends[0]);

console.log(relationships);

for (var i = 0; i < animals.length; i++) {
  animals[i].relationships = {};
}

console.log(animals);
