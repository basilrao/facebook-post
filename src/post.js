import React from 'react';
import './App.css';
import myimg from "./imgf.jpg"
import like from "./like.png"
import share from "./share.png"
import comment from "./comments.png"

function post(props) {
 
    return (
      <>
      
      <div className="card">
        <div className="container">
        <h4><img alt="fimg" src={myimg} ></img><bold>{props.pname}</bold><p>{props.time}</p></h4>
        
        <p style={{paddingTop:"2%",paddingBottom:"2%"}}>{props.pd}</p>
        
        </div>
        <img alt="fm" src={props.img}></img>
  
        <button><span><img alt="like" src={like}></img></span>Like</button>
        <button><span><img alt="comment" src={comment}></img></span>Comment</button>
        <button><span><img alt="share" src={share}></img></span>Share</button>
        <p className="pp"><img  alt="fimg" src={myimg} ></img><input type="text" placeholder="Write a Comment"/></p>
        </div>
        </>
    );
  }
  
  export default post;