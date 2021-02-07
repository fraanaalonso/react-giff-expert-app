import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GiffGridItem';


export const GifGrid = ( {category} ) => {

    const {data: images, loading} = useFetchGifs(category);


    return (
        <>
        <h3>{ category }</h3>

        { loading && <p className="animate__animated animate__flash">Loading...</p> }
        <div className='card-grid'>
                {
                    //I unstructured the array images
                    images.map( (img) => (
                    <GifGridItem
                        key = { img.id }
                        {...img}
                        
                    />
                    ))
                }
        
            </div> 
         </>
    )
}
