import React from 'react';
import Post from "./post"
import "./App.css"

function App(props) {
 
  return (
    <div >
    <h1>Facebook Post</h1>
    <Post pname="Muhammad Basil" time="9h" pd="In the United States, a SWAT (special weapons and tactics) team is a law enforcement unit which uses specialized or military equipment and tactics." img="https://e7.pngegg.com/pngimages/163/586/png-clipart-united-states-special-forces-special-reaction-team-swat-military-swat-people-computer-wallpaper.png"/>
    <Post pname="Muhammad Basil" time="9h" pd="In the United States, a SWAT (special weapons and tactics) team is a law enforcement unit which uses specialized or military equipment and tactics." img="https://media.istockphoto.com/photos/special-forces-soldier-police-swat-team-member-picture-id1154971116?k=6&m=1154971116&s=612x612&w=0&h=BZRoKyJ-_SdlfLv1P0cu8f8ULPGUrikFHGsIysD1pIw="/>
    <Post pname="Muhammad Basil" time="9h" pd="In the United States, a SWAT (special weapons and tactics) team is a law enforcement unit which uses specialized or military equipment and tactics." img="https://i.ytimg.com/vi/XYVP5LE4mgc/hqdefault.jpg"/>
    
      </div>
  );
}

export default App;
