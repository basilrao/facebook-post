import React,{useState} from 'react';
import Post from "./post"
import "./App.css"

function App(props) {
  const[pnam,setPname]=useState('');
  const[pdes,setPd]=useState('');
  const[pimg,setPimg]=useState('');
  const submitf=()=>{
    
    return(
      <>
      
      <Post pname={pnam} time="9h" pd={pdes} img={pimg}/>
      </>
      
      
    )
  }
 
  return (
    <div className="form" >
    <h1>Facebook Post</h1>
    <label htmlFor="pd">Username</label>
    <input onChange={event => setPname(event.target.value)} type="text" id="pname" placeholder="Username.." />
    <label htmlFor="pd">Post Description</label>
    <input onChange={event => setPd(event.target.value)} type="text" id="pd" placeholder="Post Description.." />
    <label htmlFor="pimg">Post Image</label>
    <input onChange={event => setPimg(event.target.value)} type="text" id="pimg" placeholder="Post Image.." />
    <button onClick={submitf}className="submit">SUBMIT</button>
    <Post pname={pnam} time="9h" pd={pdes} img={pimg}/>
    
    
    
    
      </div>
  );
}

export default App;
