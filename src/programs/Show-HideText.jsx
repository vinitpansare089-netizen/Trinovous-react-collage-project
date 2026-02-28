import { useState } from "react";
function App(){
const [show,setShow]=useState(true);
return(
<>
<button onClick={()=>setShow(!show)}>Toggle</button>
{show &&<p>HelloReact</p>}
</>
);
}
export default App;