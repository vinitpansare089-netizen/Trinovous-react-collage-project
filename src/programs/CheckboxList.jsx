function App(){
const skills=["HTML","CSS","JS"];
return skills.map(s=><label><input type="checkbox"/>{s}</label>);
}
export default App;