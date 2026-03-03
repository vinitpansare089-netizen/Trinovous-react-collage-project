function App(){
const items=["Red","Green","Blue"];
return(
<select>
{items.map(i=><option>{i}</option>)}
</select>
);
}
export default App;