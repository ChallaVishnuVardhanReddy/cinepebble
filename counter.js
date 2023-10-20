import React from "react"
import { useState } from "react"

function Counter(){
    const [cc,setcc]=useState(0);

    return (
        <div>
            <p>{cc}</p>
           <button onClick={() => setcc(cc+1)}>clickme</button>
        </div>
        
    )
}
export default Counter;
