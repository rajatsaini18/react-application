
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
const [mode,setMode]=useState("light");
const [alert,setAlert]=useState(null);




 const toggleMode=()=>{
   if(mode==="light"){
   setMode("dark");
   document.body.style.backgroundColor="grey";
   showAlert("Dark mode has been enabled","Success");

   }
   
  else{
  setMode("light");
  document.body.style.backgroundColor="white";
  showAlert("Light mode has been enabled","Success");
  }
 }

 const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

  return (
  <>
<BrowserRouter>
<Navbar modeType={mode} toggle={toggleMode}> </Navbar>
<Alert alert={alert}></Alert>
<Routes>
  
<Route path="/" element={<TextForm modeType={mode}  showAlert={showAlert} heading="Enter your text here" ></TextForm> }/>
<Route path="/about" element={<About heading="About us"></About>}/>
</Routes>
</BrowserRouter>
          


  </>
  );
}

export default App;
