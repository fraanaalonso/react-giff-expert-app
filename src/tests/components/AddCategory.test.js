import React from 'react'
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory";
import '@testing-library/jest-dom';


describe('AddCategory tests', () => {
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/>);
    beforeEach( () => {
        jest.clearAllMocks(); //Vaciamos el form
        wrapper = shallow( <AddCategory setCategories={setCategories}/>);
    });
    
    test('Must show the information correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Must change the text box', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } });
        expect( wrapper.find('p').text().trim() ).toBe( value );
    })

    test('Must not post the onSubmit information ', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){}});
        expect( setCategories ).not.toHaveBeenCalled();
    })
    
    test('Must call setcategories and clean the textBox', () => {
        //1. Simulate el input change
        //2. Simulate el submit
        //3. Must call setCategories
        //4. Input value must be an empty string
        const value = 'Hola Mundo';
        const emptyString = ''
        wrapper.find('input').simulate('change', {target:{ value }});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect( setCategories ).toHaveBeenCalled();
        //expect( setCategories ).toHaveBeenCalledTimes(2); Me aseguro que sólo se llame una vez
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ); //espero que sea una función
        expect( wrapper.find('input').prop('value') ).toBe( emptyString );

    })



    
    
    
    
})