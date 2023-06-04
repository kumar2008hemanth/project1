
import React from 'react'
import './Categories.css';

export default function Category({categoryObj}) {
    return (
        <div className='col'>
            <div className='category text-center' >
                <img src={categoryObj.img_url} alt='no image' /> 
                <div> {categoryObj.text}</div>
            </div>
        </div>
    )
}






