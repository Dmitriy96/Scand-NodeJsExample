export default class Author {

    constructor(name, surname, books) {
        this.name = name;
        this.surname = surname;
        this.books = books;
    }

    getFullName() {
        let surname = this.surname;
        const printName = () => {
            console.log(`${this.name} ${surname}`);
        };
        printName();
        return `${this.name} ${this.surname}`
    }
}
