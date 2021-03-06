import React, { useState, useEffect, useRef } from 'react'
import './Hypotenuse.css'
import triangleImage from './img/triangle.png'

const Hypotenuse = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const outputBox = useRef(null);

    useEffect(() => {
        if(a < 0 || b < 0){
            outputBox.current.innerText = 'Given Inputs can\'t be negative.'
        }
        else if(a !== '' && b !== ''){
            outputBox.current.innerText = ''
            let a1 = Number(a)
            let b1 = Number(b)
            let h = Math.sqrt(a1 * a1 + b1 * b1);
            setC(h)
        }
        
    }, [a, b, c])

    return (

        <div className="container hypotenuse">
            <img src={triangleImage} alt="triangle"/>
            <div>
                <p id="output">c <span id="hypotenuse-text">(hypotenuse)</span> {c ? <span>&#x2248; {c}</span>  : <span>= &#8730;a<sup>2</sup>+b<sup>2</sup></span>} </p>

                <label htmlFor="b">a <span>Leg</span></label>
                <input type="text" placeholder="Enter value" id="a" onChange={event => setA(event.target.value)}/>
                <br />
                <label htmlFor="height">b <span>Leg</span></label>
                <input type="text" placeholder="Enter value" id="b" onChange={event => setB(event.target.value)} />

                <div id="output" ref={outputBox}></div>
            </div>
        </div>
    )
}

export default Hypotenuse
