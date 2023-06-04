import React, {useEffect,useState} from 'react'

export default function Statedemo2() {
    let [count,setCount] = useState(0);

    let increment = () =>{
        setCount(count + 1);  //asyncronus
    };
    useEffect(() => {
        console.log(count);
    });
  return (
    <>
    <div>This is functional component</div>
    <div>count is : {count}</div>
    <button onClick={increment}>increment</button>
    </>
  )
}
