import {useState,useEffect} from "react";
function App(){
const [time,setTime]=useState(new Date().toLocaleTimeString());
useEffect(()=>{
setInterval(()=>setTime(new Date().toLocaleTimeString()),1000);
},[]);
return <h1>{time}</h1>;
}
export default App;