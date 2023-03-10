import "./App.css";
import React, { useState } from "react";

function App() {
  // Declare a new state variable, which we'll call "count"

  const useEffect=()=>{

  
  const [formdata, setFromdata]=useState({
    username:'',
    email:'',
    password:'',
    cn_password:''

  });
  const handle= (e)=>{
    const name= e.target.name;
    const value=e.target.value;
   setFromdata((p)=>{
    return{
      ...p ,[name]:value
    }
   })


  }
// const useEffect=()

  return (
    <div className="App">
      <input
        type="text"
        id="name"
        name="username"
        placeholder="Name"
        value={formdata.username}
        onChange={handle}
      ></input>
      <input
        type="text"
        id="email"
        name="email"
       placeholder="Email"
       value={formdata.email}
       onChange={handle}
      ></input>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="password"
        value={formdata.password}
        onChange={handle}
      ></input>
;<input
        type="password"
        id="cn_password"
        name="cn_password"
        placeholder="password"
        value={formdata.cn_password}
        onChange={handle}
      ></input>
      <p>
    my name is {formdata.username} email is {formdata.email} and  password is{formdata.password}
      </p>
    </div>
  );
}
}
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count +1 })}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }

export default App;
