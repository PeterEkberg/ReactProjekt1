//import React from 'react'
import './Greeting.css'

export const Greeting = ({name,color}) => {
    return (
        <div>
            {name}
            {color}
            <h1 className="title">Hello Awsome Shit!</h1>
        </div>
    )
}