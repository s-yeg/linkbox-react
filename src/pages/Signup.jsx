import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

    const navigation = useNavigate()

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

async function clickSignup(){

const response = await fetch ('http://localhost:8080/api/signup', 
    { method : 'POST',
      headers :{'Content-Type':'application/json'},
      body: JSON.stringify({username: username, password: password})
    })

const data = await response.text()


if (data === "signup success"){  navigation("/login") }


}



    return (

      <div className='container'>

        <h1>SIGN UP</h1>

        <div className='loginBox'>

            <input type='text' placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
            <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>      

            <button onClick={clickSignup}>SIGN UP</button>        
        </div>

      </div>

    )
}

export default Signup