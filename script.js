function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? "finished reading." : "hasn't read yet."}`;
    }
}

const theAlchemist = new Book("The Alchemist", "Paulu Coelho", "84", true)
console.log(theAlchemist.info());