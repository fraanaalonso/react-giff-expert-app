import { shallow } from 'enzyme'
import '@testing-library/jest-dom';
import React from 'react'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test GifGrid', () => {
    const category = 'One Punch';
    test('Must show GifGrid Snapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category }/>);
        expect( wrapper ).toMatchSnapshot();
    })

    test('Must show items when getting images', () => {
        
        //lets simulate that we are getting the information provided by our customHook
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cosa.png',
            title: 'Una cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={ category }/>);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(true);
        expect( wrapper.find('GifGridItem').length).toBe(gifs.length); //make sure I'm passing GifGridItem arguments


    })
    
    
})