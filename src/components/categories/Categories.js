import React from 'react'
import './Categories.css';
import categoriesArr from "./Categories.json";
import Category from "./Category";

export default function Categeroies() {
    return (
        <div className='container'>
            <div className='row'>
                {
                    categoriesArr.map(categoryObj =>{
                        return <Category categoryObj={categoryObj} />
                    })
                }
            </div>
        </div>
    )
}
