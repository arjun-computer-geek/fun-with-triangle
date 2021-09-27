import React, { useState, useEffect, useRef } from 'react'
import './AreaOfTriangle.css'

const AreaOfTriangle = () => {
    const [area, setArea] = useState('');
    const [base, setBase] = useState('');
    const [height, setHeight] = useState('');
    const outputBox = useRef(null);

    useEffect(() => {

        if(base < 0 || height < 0){
            outputBox.current.innerText = 'Given Inputs can\'t be negative.'
        }
        else if(base !== '' && height !== ''){
            outputBox.current.innerText = ''
            let b = Number(base)
            let h = Number(height)
            let areaOfTriangle = (b * h) /2;
            setArea(areaOfTriangle)
        }
    }, [area,base,height])

    return (
        <div className="container area-of-triangle-container">
            <p id="output">A = {area ? area : 'h.b/2'}  </p>

            <label htmlFor="base">b <span>Base</span></label>
            <input type="text" placeholder="Enter value" id="base" onChange={event => setBase(event.target.value)} />
            <br/>
            <label htmlFor="height">h <span>Height</span></label>
            <input type="text" placeholder="Enter value" id="height" onChange={event => setHeight(event.target.value)} />
            <div id="output" ref={outputBox}></div>
        </div>
    )
}

export default AreaOfTriangle
