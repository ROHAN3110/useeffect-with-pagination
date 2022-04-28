import {useEffect,useState} from "react";

export const Todos=()=>{
    const [todos,setTodos]=useState([]);
    const [text,setText]=useState("");
    const [page,setPage]=useState(1);
  
    useEffect(()=>{
        getData();

        return function cleanup(){
            console.log("todos is unmounted")
        }
    },[page]);

    const getData=async()=>{
        const data=await fetch(`http://localhost:8080/todos?_page=${page}&_limit=3`)
          .then((d)=>
            d.json()
           );
           setTodos(data);
    
         
    }

return(
    <div>
        <input
        onChange={(e)=>setText(e.target.value)}
        type="text" placeholder="Enter todos"/>
         <button onClick ={()=>{
             const payload={
                 tittle:text,
                //  status:false
             };
             fetch("http://localhost:8080/todos",{
                 method:"POST",
                 headers:{
                     "content-type":"application/json"
                 },
                 body:JSON.stringify(payload)
             }).then(()=>{
                 getData();
             })

             //axios,post("http.....",payload)
         }} 
         >add todo</button>
         {todos.map((t)=>(
             <div>{t.tittle}
             </div>
         ))}
         <button onClick={()=>{
             setPage(page-1)

         }}
         >Prev</button>
        
        
         <button onClick={()=>{
             setPage(page+1)

         }}>Next</button>

    </div>
)
}