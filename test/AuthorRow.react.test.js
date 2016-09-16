import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import AuthorRow from '../app/client/components/AuthorRow.react';


describe('<AuthorRow />', function () {
    const currentDate = new Date();
    const author = {
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
    };
    it('row contains correct author name', function () {
        const wrapper = mount(<AuthorRow author={author}/>);
        expect(wrapper.props().author.name).to.equal("Jack");
        expect(wrapper.text()).to.contain("Jack");
    });
    it('row contains correct books count', function () {
        const wrapper = mount(<AuthorRow author={author}/>);
        expect(wrapper.props().author.books).to.have.length(2);
    });
    it('incrementing quantity value', function () {
        const wrapper = mount(<AuthorRow author={author}/>);
        let button = wrapper.find('button');
        button.simulate('click');
        expect(wrapper.state().value).to.equal(1);
        button.simulate('click');
        expect(wrapper.state().value).to.equal(2);
    });
});