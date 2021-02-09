import { shallow } from 'enzyme'
import React from 'react'
import { GifExpertApp } from '../GifExpertApp'


describe('Testing GifExpertApp', ()=> {
    test('Must test matching Snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('Must show a list of categories ', () => {
        const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length);
    })
    
    
})