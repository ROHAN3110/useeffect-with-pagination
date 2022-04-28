import { useEffect, useState } from 'react';
import './App.css';
import {Todos} from "./components/todos"
//  import {Hello} from "./components/Hello" 
import {Counter} from "./components/counter"

function App() {
  const[show,setShow]=useState(true);
  // const [todos, setTodos] =useState([])
  
  // useEffect(()=>{
  //   fetch("http://localhost:8080/todos")
  //   .then((d)=>d.json())
  //   .then((data)=>{
  //     setTodos(data);
  //   })
    //**************************** */
    // async function getdata(){
    //   const data=await fetch("http://localhost:8080/todos")
    //   .then((d)=>
    //    d.json()
    //   );
    //   setTodos(data);

    // };
    // getdata();
    
//****************************************** */
  // },[]);
 
  
  
  return (
    <div className="App">
      {/* {todos.map((todo)=>{
        <div>
          {todo.tittle}
          </div>
      })} */}
      {show?<Todos/>:null}
      <button onClick={()=>{
        setShow(!show)
      }}>{show?"Hide":"Show"} Todos
      </button>

      {show?<Counter/>:null}
      <button onClick={()=>{
        setShow(!show)
      }}>{show?"Hide":"Show"} Todos
      </button>
      
    </div>
  );
}

export default App;
