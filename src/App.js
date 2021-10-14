import React , { useState} from 'react'
import Navbar from './Navbar';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";


//HOOK need to figure out how to isolate it onto one page
export default function App() {
  const [count, setCount] = useState(0) 
  //const [test, setTest]=useState([1,2,3,4,5])

  function decrementcount(){
    let newValue = count - 1
    setCount(newValue)
  }

  const incrementcount = () => {
    let newValue = count + 1
    setCount(newValue)
  }


  return (
  <div>
    <Navbar />
    <h1>{count}</h1>
    <button onClick={decrementcount}>-</button>
    <button onClick={incrementcount}>+</button>
    <Switch>
      <Route exact path = '/' render={()=><Home />}/>
      <Route exact path = '/about' render={()=><About />}/>
      <Route exact path = '/shop' render={()=><Shop />}/>
    </Switch>
    </div>
    )
}


