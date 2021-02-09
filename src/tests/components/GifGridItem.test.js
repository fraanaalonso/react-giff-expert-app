import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GiffGridItem'


describe('Test GifGridItem component', () => {

    const url = 'https://localhost/algo.jpg';
    const title = 'Un titulo';

    const wrapper = shallow( <GifGridItem title={title} url={url} />)


    test('Must show a snapshot ', () => {
        const wrapper = shallow(<GifGridItem />)
        expect( wrapper ).toMatchSnapshot();

        
    })

    test('Must show title and url', () => {


        expect( wrapper ).toMatchSnapshot();

    })

    test('Must have a paragraph with the title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })

    test('Must have an image equal to url and props alt', () => {
        const img = wrapper.find('img');
        //console.log( img.prop('src') );
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    })
    
    test('Must have animated__fadein', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__fadeIn') ).not.toBe( false );
    })
    
    
})