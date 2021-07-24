
// eg 2
import React from 'react'

export default function State(props) {

    return (
        <div>
            <p>{props.count}</p>
            <button onClick={props.handleClick}>Click</button>
        </div>
    )
}



// app.js eg 2

import App from './App.css'
import Child from './Component/Child'
import State from './Component/State'
import {useState} from 'react'

function App() {
    const [count, setCount] = useState(0)
    const handleClick = () =>{
      setCount(+1);
    }

  return (

    <div>
        <State count= {count}handleClick={handleClick}/>
    </div>
  )
}


export default App






// conditional rendering
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





// app.js eg 2

import App from './App.css'
import Child from './Component/Child'
import State from './Component/State'
import {useState} from 'react'

function App() {
    const [count, setCount] = useState(0)
    const[isLog, setIsLog]= useState(true)


    const handleClick = () =>{
      setCount(+1);
    }

  return (

    <div>
        {isLog ?<p>We are logged in</p>: <p>You are logged out, please sign in</p>}
        <State count= {count}handleClick={handleClick}/>
    </div>
  )
}


export default App