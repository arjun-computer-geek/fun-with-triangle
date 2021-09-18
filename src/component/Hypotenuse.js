import React from 'react'
import './Hypotenuse.css'
import triangleImage from './img/triangle.png'
const Hypotenuse = () => {
    return (
        <div className="container hypotenuse">
            <img src={triangleImage} alt="triangle"/>
            <div>
                <p id="output">c <span id="hypotenuse-text">(hypotenuse)</span> = <span> &#8730;a<sup>2</sup>+b<sup>2</sup></span></p>

                <label htmlFor="b">a <span>Leg</span></label>
                <input type="text" placeholder="Enter value" id="a"  />
                <br />
                <label htmlFor="height">b <span>Leg</span></label>
                <input type="text" placeholder="Enter value" id="b"  />

            </div>
        </div>
    )
}

export default Hypotenuse
