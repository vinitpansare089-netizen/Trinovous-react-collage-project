import { useState } from "react";
function App(){
const [num,setNum]=useState(10);
return(
<>
<h2>{num}</h2>
<button onClick={()=>setNum(num-1)}>Decrease</button>
</>
);
}
export default App;
