import { shallow } from 'enzyme'
import React from 'react'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test GifGrid', () => {
    const category = 'One Punch';
    test('Must show GifGrid Snapshot', () => {

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
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={ category }/>);
        
        expect( wrapper ).toMatchSnapshot()



    })
    
    
})