import { useState } from "react";
function Conditional_ternary() {
    const [login,setlogin]=useState(true);
     const Logsub=()=>{
        setlogin(!login)//use toggale Case
     }
  return (
    <div style={{margin:"150px",textAlign:"center"}}>
        <button style={{fontSize:"xx-large"}}onClick={() => Logsub()}>Submit</button>
        {login?<h1>you have submit</h1>:<h1></h1>}
        
    </div>
  )
}
export default Conditional_ternary;
