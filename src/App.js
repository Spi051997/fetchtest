import axios from 'axios';
import {useEffect,useState} from 'react';
import './App.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function App() {
  const [post,setpost]=useState([]);

const getdata=async()=>
{
  try{
    const response=await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-04-18&sortBy=publishedAt&apiKey=3a56a21142a249569c54d5212aa63b56');
    // console.log(response);
    const dataa=await response.data;
    console.log(dataa);
    setpost(dataa);

  }
  catch(error)
  {
    console.error(error);
  }
}

//  const  fetchpost=async()=>
//  {
//    const response=await fetch(
//      "https://dog.ceo/api/breeds/image/random"
//    );
    
//    const data=await response.json();
//    console.log("DATA",data)
//    setpost(data);
//  }

 useEffect(()=>
 {
  // fetchpost();
  getdata();
 },[]);
  return (
    <div className="App">
     {
 post.forEach(
   <div>
     
   </div>
 )
     }
    </div>
  );
}

export default App;
