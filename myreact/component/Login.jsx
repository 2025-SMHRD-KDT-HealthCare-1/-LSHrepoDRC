import React from 'react'

const Login = () => {
    // 로그인해서Home으로 이동
    const goToHome = () => {    
     

    }


  return (
    <div>
        <h1>즐거운 React 수업</h1>
        <p>ID : <input type="text"/></p>
        <p>PW : <input type="text"/></p>
        <button onClick={goToHome}>로그인 시도</button>
        
    </div>
  )
}

export default Login