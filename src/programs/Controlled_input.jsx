import {useState} from "react";
function App(){
const [val,setVal]=useState("");
return <input value={val} onChange={e=>setVal(e.target.value)} />;
}
export default App;