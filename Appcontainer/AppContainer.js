import React, { useState } from "react";



export default function AppContainer() {
const[data, setData] = useState([]);

  

   
   const myList =  () => {
   
   fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
console.log(json);
setData(json),
});
   

};
  

    
 

  return (
    <>
      <div className="explore">
        <h1>Explore</h1>
        <button onClick = {myList}>list</button>
        <br/>
{JSON.stringify(data,null,2)}


      </div>
    </>
  );
}