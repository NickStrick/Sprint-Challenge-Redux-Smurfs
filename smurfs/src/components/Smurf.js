import React from 'react';

const Smurf = props => {
    
    return (
    <div className={props.index === 0 ? "card firstCard" : "card"} >
        <div onClick={() => props.startUpdate(props.smurf)}>
            <h4 >{props.smurf.name}</h4>
            <div className="info">
                <p ><span>age:</span>  {props.smurf.age}</p>
                <p ><span>height:</span>  {props.smurf.height}</p> 
            </div>
        </div>
        <button onClick={() => props.deleteSmurf(props.smurf.id)}> Delete </button>
    </div> 
    )
}

export default Smurf;