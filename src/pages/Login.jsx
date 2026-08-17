import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
//시간+배터리 기능 컴포넌트
import StatusBar from '../components/StatusBar';
import '../App.css'


//로그인 화면을 만들어주는 함수
function Login() {

//useNavigate()가 돌려준 이동 함수를 navigation변수에 넣음
  const navigation = useNavigate()

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const [message,setMessage]=useState("");


//로그인 버튼을 눌렀을때 실행되는 함수 
 async function clickLogin()
{
    const response = await fetch('http://localhost:8080/api/login',
         { method:'POST', 
           credentials: 'include', 
           headers: { 'Content-Type':'application/json' },
           body: JSON.stringify( { username:username,password:password })
         })

    const data = await response.text()


    if (data==="login success"){
      navigation("/")
    }

    else {
      setMessage("아이디 또는 비밀번호가 틀렸습니다.")
    }
}


  return (
  <div className='container'>


      <StatusBar />


      <h1>LINK BOX</h1>

      <p className='subtitle'>
        내 링크를 안전하게 저장하고 관리하세요.
      </p>


    <div className='loginBox'>

      <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
      <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>

             <p>{message}</p>

      <button onClick={clickLogin}>LOGIN</button>

      <button onClick={() => navigation("/signup")}>SIGN UP</button>

    </div>

  </div>
  )
}


export default Login