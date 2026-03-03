function App(){
const fruits=["Apple","Banana","Mango"];
return <ul>{fruits.map(f=><li>{f}</li>)}</ul>;
}
export default App;