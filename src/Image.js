import axios from "axios";
import { useEffect, useState } from "react";
import App from "./App.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Image() {
  const [post, setpost] = useState([]);

  const getpost = async () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3a56a21142a249569c54d5212aa63b56"
      )
      .then((response) => {
        console.log(response.data);
        setpost(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getpost();
  }, []);

  return (
    <div className="Maindivclass">
      {post.map((response) => (
         <Card sx={{ maxWidth: 345 }}>
         <CardMedia
           component="img"
           height="140"
           image={response.urlToImage}
           alt="green iguana"
         />
         <CardContent>
           <Typography  id='_titlefont' gutterBottom variant="h7" component="div">
            {response.title}
           </Typography>
           <Typography  id='_fontColor'  variant="body2" color="text.secondary">
           {response.description}
           </Typography>
         </CardContent>
         <CardActions>
           {/* <a>{response.url}</a> */}
           {/* <Button size="small">Share</Button>
           <Button size="small">Learn More</Button> */}
         </CardActions>
       </Card>
      ))}
      {/* {

      // <p>Helo</p>
    
      post.map((data)=>(



    

        <div>
          <img src={data.urlToImage} />
          <p>{data.content}</p>
          



        </div>

      ))
    } */}
    </div>
  );
}

export default Image;
