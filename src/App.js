import {useEffect,useState} from 'react';
import './App.css';


function App() {
  const [post,setpost]=useState([]);
 const  fetchpost=async()=>
 {
   const response=await fetch(
     "https://api.chucknorris.io/jokes/random"
   );
    
   const data=await response.json();
   console.log(data)
   setpost(data);
 }

 useEffect(()=>
 {
  fetchpost();
 },[]);
  return (
    <div className="App">
      <img  src={post.icon_url}></img>
      <p>{post.value}</p>

      <button onClick={fetchpost}></button>
      
    </div>
  );
}

export default App;
