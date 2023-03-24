import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>

      <District name="NoaKhali" special="vibag"></District>
      <District name="Bhamanbaria" special="Joda Akbar"></District>
      <District name="Cumilla" special="Moyna"></District>
    </div>
  );
}


function LoadPost(){
  // step-1 : useState
  const [posts, setPosts] = useState([]);
  // step-2 : useEffect
  useEffect( ()=>{
    // step-3 : fetch data
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[]);
  return (
    <div>
      <h1>Posts : {posts.length}</h1>
      {/* step-4 : get single data from posts and 
      step-5 : show on ui*/}
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}


function Post(props){
  return(
    <div style={{backgroundColor:'lightcyan', margin:'20px', border:'2px solid black', padding:'10px'}}>
      <h2>Title : {props.title}</h2>
      <p>Body : {props.body}</p>
    </div>
  )
}



const districtStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    margin: '20px',
    borderRadius: '20px'
  }

function District(props){

  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power*2;
    setPower(newPower);
  }

  return(
    <div style={districtStyle}>
      <h2>Name : {props.name}</h2>
      <p>Specialty : {props.special}</p>
      <h4>Power : {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}


export default App;
