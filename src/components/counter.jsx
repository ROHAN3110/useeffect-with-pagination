import { useEffect,useState } from "react";
export const Counter=()=>{
    const [Count,setCount]=useState(10);
    useEffect(()=>{
        let id=setInterval(()=>{
           
                setCount((prevValue)=>{
                    console.log("setting state",prevValue);
                    if(prevValue<=0){
                        clearInterval(id);
                        return 0;
                    }
                  return prevValue-1;
                })
                
            },1000);

            return()=>{
                clearInterval(id);
            }
        } ,[])

    return(
        <div>
            <h3>Count:{Count}</h3>
        </div>
    )
}