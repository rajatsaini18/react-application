import React,{useState} from 'react'

export default function TextForm(props) {
    
    const [text,setText]=useState("Insert your text in this area");

    

    const toUpper= ()=>{
          var newText=text.toUpperCase();
          setText(newText);
          console.log(text);
          props.showAlert("Converted to Upper case","Success");
          
    }

    const toCopy=()=>{
   var text=document.getElementById("myBox");
   text.select();
   text.setSelectionRange(0,9999);
   navigator.clipboard.writeText(text.value);
   props.showAlert("Copied to clipboard","Success");
    }

    const onChangeHandler= (event)=>{
     setText(event.target.value);

    }

  return (
    <div className='container my-3'>
       <h1 style={{color:props.modeType==="dark"?"white":"Black"}}>{props.heading}</h1>
        <textarea className=" form-control" id="myBox" color='black' value={text} onChange={onChangeHandler} style={{backgroundColor: props.modeType==="dark"?"grey":"white",color:props.modeType==="dark"?"white":"Black"}} rows="8"></textarea>
        <button type="button" className="btn btn-light my-3" onClick={toUpper}>toUpperCase</button>
        <button type="button" className="btn btn-light my-3 mx-2" onClick={toCopy}>copyText</button>
        
         
    </div>
  )
}
