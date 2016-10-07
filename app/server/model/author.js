import Sequelize from 'sequelize';

//export default class Author {
//
//    constructor(name, surname, books) {
//        this.name = name;
//        this.surname = surname;
//        this.books = books;
//    }
//
//    getFullName() {
//        let surname = this.surname;
//        const printName = () => {
//            console.log(`${this.name} ${surname}`);
//        };
//        printName();
//        return `${this.name} ${this.surname}`
//    }
//}
let sequelize = new Sequelize('mysql://root:superpuper@localhost:3306/authors');

let Author = sequelize.define('Author', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        surname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        books: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'author',
        timestamps: false
    }
);

export default Author;