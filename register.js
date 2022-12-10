import React, { useState,useEffect} from 'react'
import axios from 'axios'


const Login = (props) => {
    const baseUrl = ("https://be-server.zilog.online")
    const [resLogin,setReslogin] = useState("")
    const [username,setUsername] = useState("")
    const [fullname,setFullname] = useState("")
    const [data,setData] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    useEffect(()=>{
        axios.post((baseUrl),{"Content-Type":"application/json"})
        .then((res) =>{
          console.log(res)
          setData(res.data.message)
        })
        .catch((err)=>{
          console.log(err)
          setData(err.response)
        })
    },[])

    const OnLogin=() =>{
      const data = {
        email : email,
        password : password,
        username : username,
        fullname : fullname
      }
      axios.post("https://be-server.zilog.online/blogger/api/v2.1/register",data,{"Content-Type":"application/json"})
      .then((res)=>{
        console.log(res.data)
        setReslogin(res.data.message)
      })
      .catch((err)=>{
        console.log(err.response)
        setReslogin(err.response.data.message)
      })
    }
  return (
    <div>login form
        <div className='login-1'>
            <label>email</label>
            <input
            type="text" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Email'/>
        </div>
        <div className='login-1'>
            <label>username</label>
            <input
            type="text" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='username'/>
        </div>
        <div className='login-1'>
            <label>password</label>
            <input
            type='text'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='password'/>
        </div>
        <div className='login-1'>
            <label>Fullname</label>
            <input
            type="text" 
            value={fullname}
            onChange={(e)=>setFullname(e.target.value)}
            placeholder='fullname'/>
        </div>
       
        <button type='submit'
          onClick={() => OnLogin()}
          placeholder="Login">
          Login
        </button>
    </div>
  )
}

export default Login
