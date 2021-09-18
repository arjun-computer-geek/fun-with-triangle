import React, { useState } from 'react'
import './AreaOfTriangle.css'

const AreaOfTriangle = () => {
    const [area, setArea] = useState('');
    const [base, setBase] = useState('');
    const [height, setHeight] = useState('');

    const calculateArea = () => {
        if(base !== '' || base !== ''){
            let b = Number(base)
            let h = Number(height)
            let area = (b * h);
            setArea(area)
        }
        
    }
    return (
        <div className="container area-of-triangle-container">
            <p id="output">A = {area ? area : 'h.b/2'}  </p>

            <label htmlFor="base">b <span>Base</span></label>
            <input type="text" placeholder="Enter value" id="base" onChange={event => {setBase(event.target.value); calculateArea()}} />
            <br/>
            <label htmlFor="height">h <span>Height</span></label>
            <input type="text" placeholder="Enter value" id="height" onChange={event => {setHeight(event.target.value); calculateArea()}} />

        </div>
    )
}

export default AreaOfTriangle
