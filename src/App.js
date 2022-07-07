import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

function App() {

useEffect(()=>{
  getGameData();
}, [])


const getGameData = async() => {
  try {
    let response = await axios.get("http://localhost:8080/all");
    console.log(response.data)
    
  } catch (error) {
    console.log(error)
    
  }
}

  return (
    <div>
      <h3> Hello World!</h3>
    </div>
  );
}

export default App;
