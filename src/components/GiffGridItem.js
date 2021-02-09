import React from 'react';
import PropTypes from 'prop-types'

export const GifGridItem = ( {title, url} ) => {

    return (
        <div className="card animate__fadeIn">
            <img src={url} alt={title} />
            <p>{ title }</p>
        </div>
    )
}


GifGridItem.protoTypes = {
    title: PropTypes.string.isRequired
}

GifGridItem.protoTypes = {
    url: PropTypes.string.isRequired
}