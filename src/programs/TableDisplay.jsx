function App(){
const data=[{id:1,marks:90},{id:2,marks:80}];
return(
<table border="1">
{data.map(d=><tr><td>{d.id}</td><td>{d.marks}</td></tr>)}
</table>
);
}
export default App;