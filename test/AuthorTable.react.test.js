import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import AuthorTable from '../app/client/components/AuthorTable.react';


describe('<AuthorTable />', function () {
    const currentDate = new Date();
    const authors = [
        {
            "name": "Jack",
            "surname": "London",
            "books": [
                {
                    "title": "Martin Iden",
                    "publishingDate": currentDate
                },
                {
                    "title": "The Iron Heel",
                    "publishingDate": currentDate
                }
            ]
        },
        {
            "name": "Ayn",
            "surname": "Rand",
            "books": [
                {
                    "title": "Atlas Shrugged",
                    "publishingDate": currentDate
                },
                {
                    "title": "The Fountainhead",
                    "publishingDate": currentDate
                }
            ]
        }
    ];
    it('table contains authors name', function () {
        const wrapper = mount(<AuthorTable authors={authors}/>);
        expect(wrapper.contains(<td>Jack</td>)).to.equal(true);
        expect(wrapper.contains(<td>Ayn</td>)).to.equal(true);
    });
    it('table contains correct row count', function () {
        const wrapper = mount(<AuthorTable authors={authors}/>);
        expect(wrapper.find('tr')).to.have.length(3);
    });
});