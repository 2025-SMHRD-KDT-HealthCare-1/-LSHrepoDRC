import React from 'react'
import { useState, useRef } from 'react'
//useRef : 하나의 컴포넌트에서 태그를 찾을 수 있는 기능
//        --> 태그 참조 변수 생성 기능
const Ex04 = () => {
        const [inputText, setInputText] = useState();
        const inputRef = useRef();
        const[comnum , setComNum] =useState();

        const btnClick =()=>{
            // 1. input태그에 적은값 가져오기
            let text = inputRef.current.value
            // 2. 가져온 값으로 inputText 값 바꿔주기
            setInputText(text)
             let rannum = parseInt(Math.random()*50)+1
             setComNum(rannum)
           
        }

  return (
    <div>
        <h1>1~50 랜덤수 맞추기</h1>

        <input ref={inputRef}></input>
        <button onClick={btnClick}>출력</button>
        <h1>출력 : {inputText == comnum ? "정답입니다" : `오답입니다 답은 ${comnum}`}</h1>        

    </div>
  )
}

export default Ex04
