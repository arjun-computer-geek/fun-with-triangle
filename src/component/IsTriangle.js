import React from 'react'
import './IsTriangle.css'

const IsTriangle = () => {
    return (
        <div className="container isTriangle">
            <h1> Angles of triangles</h1>

            <label htmlFor="angle1">Angle1</label>
            <input type="text" placeholder="Enter value" id="angle1" />
            <label htmlFor="angle2">Angle2</label>
            <input type="text" placeholder="Enter value" id="angle2" />
            <label htmlFor="angle3">Angle3</label>
            <input type="text" placeholder="Enter value" id="angle3" />
            <button>isTriangle</button>
        </div>
    )
}

export default IsTriangle
