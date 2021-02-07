import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () =>{

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);
/*
    const handleAdd = () => {
        setCategories( [...categories, 'HunterXHunter'] ); //keep the previous categories and I add another one
        //setCategories(cats => [ ...cats, 'HunterXHunter']); we receive a callback
    }
*/ 
    return (

        <>
            <h2>GiffExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr></hr>

            <ol>
                { 
                    categories.map( (category, i) =>  
                       <GifGrid 
                            key={ category }
                            category={ category } 

                       
                       />
                    )
                }
            </ol>
        </>
    )
}
