import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'
const Join = () => {
    const [inputid, setInputID] = useState('')
    const [inputpw, setInputPW] = useState('')
    const [inputnick, setInputNICK] = useState('')
    const nav = useNavigate()

    const goToJoin =()=>
    {
        if(inputid != '' && inputpw != '' && inputnick != '')
        {
          nav('/Login')
          alert('회원가입이 완료 되었습니다!')
         
        }
        else
        {

          alert('정보를 모두 입력하세요!')
              
        }
        localStorage.setItem('inputid', inputid)
        localStorage.setItem('inputpw', inputpw)
    }
  return (
     <div>

        <h1>즐거운 React 수업</h1>
        ID : <input  onChange={(e)=>setInputID(e.target.value)}/>
        <br></br>
        {/* e : 이벤트 객체
            --> 이벤트에 따른 모든 정보가 담겨있다(어떤 태그로 발생 됬는지?, 어떤 이벤트로 발생 됬는지?)
        */}
        PW : <input onChange={(e)=>setInputPW(e.target.value)}/>
        <br></br>
         NICK : <input onChange={(e)=>setInputNICK(e.target.value)}></input>
        <button onClick={goToJoin}>가입하기</button>
        
    </div>
  )
}


export default Join