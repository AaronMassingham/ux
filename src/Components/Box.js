import React from 'react';


export const Box = (props) => (

<>
    <div className="box">
        <h2>{props.title}</h2>
        {props.description}
    </div>
</>


)
export default Box;