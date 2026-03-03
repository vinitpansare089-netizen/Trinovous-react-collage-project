function App(){
const students=[{id:1,name:"Amit"},{id:2,name:"Ravi"}];
return students.map(s=><p key={s.id}>{s.name}</p>);
}
export default App;