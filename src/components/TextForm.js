import React,{useState}from 'react'
 

export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("uppercase was clicked");
    setText("You have clicked on handleUpClick")
  }
  const handleOnChange = () =>{
    console.log("on change");
  }
  const [text, setText] = useState('enter text here2');
 // text = "new text";
 //setText("new text");
  return (
    <div>
        <h1>{props.heading}</h1>
      <form>
  <div className="form-group">

<textarea className="form-control" value ={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick} >convert to uppercase</button> 
</form>

    </div>
  )
}
