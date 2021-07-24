import React, {useState} from 'react'

export default function State() {

    const [count, setCount] = useState(0)
    const handleClick = () =>{
      setCount(+1)
    }
    return (
        <div>
            <p>Count</p>
            <button onClick = {handleClick}>Click</button>
        </div>
    )
}
