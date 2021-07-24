
// import App from './App.css'
// import Child from './Component/Child'
// import Pro from './Component/State'

//function App() {


//   return (
//     <div>
//       <Child></Child>
//     </div>
//   )
// }


// export default App



// classwork

//import App from './App.css'
import Classwork from './Component/Classwork';
import {useState} from 'react';

function App(){
    const [count, setCount] = useState(0);
    const[isLog, setIsLog]= useState(true)
    const handleClick = () => {
setCount(count +1);
};

const handlelogClick = () => {
  setIsLog(!isLog);
  

}
  

  return (

    <div className="App">
        {isLog ?(
        <p>We are logged in</p>
        ):( <p>You are logged out, please sign in</p>
        )}
      <button onClick= {handlelogClick}>Log in</button>
      <Classwork count= {count} handleClick={handleClick}/>
    </div>
  );
}


export default App

