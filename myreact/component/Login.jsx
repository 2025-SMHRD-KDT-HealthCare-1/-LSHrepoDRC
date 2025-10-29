import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'
const Login = () => {
    
    const [inputid, setInputID] = useState('')
    const [inputpw, setInputPW] = useState('')
    const nav = useNavigate()
    // 사용자가 입력한 ID : smhrd , PW : 123
    // 일떄만 Home 으로 이동
    // 둘중 하나라도 다르다면 '잘못 입력했습니다' 알림 출력

    const goToHome = () => {

      const saveId = localStorage.getItem('inputid')
      const savePW = localStorage.getItem('inputpw')

      if(inputid === saveId && inputpw === savePW)
      {
        nav('/Home')
        alert('환영합니다!')

      }
      else
      {
          alert("아이디나 비번이 잘못 입력 되었습니다")
      }
    }


  return (
    <div>

        <h1>즐거운 React 수업</h1>
        ID : <input onChange={(e)=>setInputID(e.target.value)}/>
        <br></br>
        PW : <input  type='password' onChange={(e)=>setInputPW(e.target.value)}/>
        <button onClick={goToHome}>로그인</button>
        
    </div>
  )
}

export default Login