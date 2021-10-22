import React from 'react'
import './Newsitem.css'

const Newsitem = ({ title, description, url, urlToImage}) => {
    return (
        <div align="center" className='item'>
            <img align="center" className='images' src={urlToImage} alt="Images" />
            <h3>
                <a href={url}>{title}</a>
            </h3>
            <p>{description}</p>
        </div>
    )
}

export default Newsitem
