import { getGifs } from "../../helpers/getGiffs"

describe('Test with getGifs', () => {
    test('Must bring in 10 elements', async() => {
        
       const gifs = await getGifs('One Punch');

       expect( gifs.length ).toBe( 10 ) //wait for 10
    })

    test('Must bring in 10 elements', async() => {
        
        const gifs = await getGifs('');
        console.log(gifs)
        expect( gifs.length ).toBe( 0 ) //wait for 10
     })
    
})