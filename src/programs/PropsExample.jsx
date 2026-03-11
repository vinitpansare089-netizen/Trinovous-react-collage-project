function Child(props){
return <h2>{props.msg}</h2>;
}
function App(){
return <Child msg="Hello Props"/>;
}
export default App;