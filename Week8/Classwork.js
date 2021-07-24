import React from 'react'

export default function State(props) {
    if (props.count)
    {
        alert('true');
    }else
    {alert('false')
    }
    return (
        <div>
            <p>{props.count}</p>
            <button onClick={props.handleClick}>Click</button>
        </div>
    )
}
