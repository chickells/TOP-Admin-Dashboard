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

console.log(pockets.pen);
console.log(bed.glasses);