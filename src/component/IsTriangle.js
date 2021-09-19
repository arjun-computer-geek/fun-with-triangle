import React, { useRef } from 'react'
import './IsTriangle.css'

const IsTriangle = () => {
    const angle1 = useRef(null);
    const angle2 = useRef(null);
    const angle3 = useRef(null);
    const outputBox = useRef(null);

    const checkIsTriangle = () => {
        let sumOfAngle = Number(angle1.current.value) + Number(angle2.current.value) + Number(angle3.current.value)
        
        if(sumOfAngle === 180){
            outputBox.current.innerText = 'yes! Given angle can form a triangle'
        }else{
            outputBox.current.innerText ='Given angle can\'t form a triangle'
        }
    }
    return (
        <div className="container isTriangle">
            <h1> Angles of triangles</h1>

            <label htmlFor="angle1" >Angle1</label>
            <input type="text" placeholder="Enter value" id="angle1" ref={angle1}/>
            <label htmlFor="angle2">Angle2</label>
            <input type="text" placeholder="Enter value" id="angle2" ref={angle2} />
            <label htmlFor="angle3">Angle3</label>
            <input type="text" placeholder="Enter value" id="angle3" ref={angle3}/>
            <button onClick={checkIsTriangle}>isTriangle</button>

            <div id="output" ref={outputBox}></div>
        </div>
    )
}

export default IsTriangle
