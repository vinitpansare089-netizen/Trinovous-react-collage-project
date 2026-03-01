import { useState } from "react";
function App(){
const [num,setNum]=useState(0);
return(
<>
<input type="number" onChange={e=>setNum(e.target.value)} />
<h2>{num%2===0?"Even":"Odd"}</h2>
</>
);
}
export default App;