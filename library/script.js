// OUTLINE

// create library array []
// create book constructor
// add book to library function
// form that adds book to libary
// display book on card

// jfc this is a thicc one lol


function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${haveRead}`
    }
}

const book1 = new Book('Power of Now', 'Eckhart Tolle', 169, 'have read')
// console.log(book1.info());

////////////////////////////////////////////
// PROTOTYPE PRACT

let head = {
    glasses: 1
};
  
let table = {
    __proto__: head,
    pen: 3
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__: bed,
    money: 2000
};

// console.log(pockets.pen);
// console.log(bed.glasses);

// function Dog(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   // Only change code below this line
//   let hound = new Dog('Chaz', 'brown')
//   console.log(hound);
//   console.log(book1 instanceof Dog);

//   Dog.prototype.numLegs = 4;

//   let ownProps = []
//   let prototypeProps = []

//   for (let thing in hound) {
//     if (hound.hasOwnProperty(thing)) {
//         ownProps.push(thing);
//     } else {
//         prototypeProps.push(thing);
//     }
//   }
//   console.log(ownProps);
//   console.log(prototypeProps);

  //////////////////////////////

  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      return "ate ur moms ass"
    },
    describe: function() {
      console.log("My name is " + this.name + " and I'm here to " + this.eat())
    },
  };

  let pooch = new Dog('Dicky')
  pooch.describe()

console.log(pooch instanceof Dog);
console.log(Dog.prototype.isPrototypeOf(pooch));

///////////////////////////////

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype) // Change this line
duck.eat()
console.log(duck instanceof Animal);
let beagle; // Change this line