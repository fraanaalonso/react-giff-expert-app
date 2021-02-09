import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Test with <useFetchGiffs />', () => {
    test('Must return the initial state', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ));
        const {data, loading} = result.current;
        console.log( data, loading );

        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
        
        

    
    });

    test('Must return an array of images and loading with false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        
        await waitForNextUpdate();
        
        const {data, loading} = result.current;
        console.log( data, loading );

        expect( data.length ).toEqual( 10 );
        expect( loading ).toBe( false );
    })
    
    
});