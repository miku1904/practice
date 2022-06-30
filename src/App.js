import { useState } from 'react';
import './App.css';

function App() {
const [name,setName]=useState("")
const [email,setEmail]=useState("")

 const Data = (e) => {
  console.log(e.target.value)

}

  return (
      // console.log(event.target.value)
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder='name' onChange={Data}/><br/>
        <input type="text" name="email" placeholder='email' onChange={Data}/><br/>
        <button type="submit" value="submit" >submit </button>
      </form>
    </div>
  );
}

export default App;
