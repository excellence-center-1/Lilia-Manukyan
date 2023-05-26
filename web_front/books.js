// Task 1: Create an array of objects representing books
const books = [
    {title: "To Kill a Mockingbird", author: "Harper Lee", pages: 336},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180},
    {title: "1984", author: "George Orwell", pages: 328},
    {title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 224},
    {title: "Brave New World", author: "Aldous Huxley", pages: 288}
];
console.log("\n" + "1st: Books:");
for(let i = 0; i < books.length; i++){
    console.log(books[i]); 
}
// Task 2: Print out the title of each book
console.log("\n" + "2nd: Titles of books:");
for (let i = 0; i < books.length; i++){
    console.log(books[i].title);
}

// Task 3: Calculate the total number of pages
let totalPages = 0;
for (let i = 0; i < books.length; i++){
    totalPages += books[i].pages;
}
console.log("\n" + "3rd: Total number of pages:", totalPages);

// Task 4: Find the book with the most pages
let maxPages = books[0];
for (let i = 1; i < books.length; i++){
    if (books[i].pages > maxPages.pages){
        maxPages = books[i];
    }
}
console.log("\n" + "4th: Book with the most pages:", maxPages.title);

// Task 5: Find the book with the shortest title
let minTitle = books[0];
for (let i = 1; i < books.length; i++){
    if (books[i].title.length < minTitle.title.length){
        minTitle = books[i];
    }
}
console.log("\n" + "5th: Book with the shortest title:", minTitle.title);

// Task 6: Create an array of all the authors
let authors = [];
for (let i = 0; i < books.length; i++){
    if (!authors.includes(books[i].author)){
        authors.push(books[i].author);
    }
}
console.log("\n" + "6th: Authors:", authors);


// Task 7: Create an array of objects representing authors
let authorObjects = [];
for (let i = 0; i < authors.length; i++){
    let author = {
        name: authors[i],
        books: [],
    };
    for (let j = 0; j < books.length; j++){
        if (books[j].author === authors[i]){
            author.books.push(books[j].title);
        }
    }
    authorObjects.push(author);
}
console.log("\n" + "7th: Authors with their books:", authorObjects);
