//export default class Book {
//
//    constructor(title, publishingDate) {
//        this.title = title;
//        this.publishingDate = publishingDate;
//    }
//}

import Sequelize from 'sequelize';

let sequelize = new Sequelize('mysql://root:superpuper@localhost:3306/authors');

let Book = sequelize.define('Book', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        publishingDate: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
                isBeforeCurrentDate: function (value) {
                    console.log('Book validate isBeforeCurrentDate', value);
                    //if(parseInt(value) % 2 != 0) {
                    //    throw new Error('Only even values are allowed!');
                    // we also are in the model's context here, so this.otherField
                    // would get the value of otherField if it existed
                    //}
                }
            }
        }
    },
    {
        tableName: 'book', // this will define the table's name
        timestamps: false           // this will deactivate the timestamp columns
    });

export default Book;