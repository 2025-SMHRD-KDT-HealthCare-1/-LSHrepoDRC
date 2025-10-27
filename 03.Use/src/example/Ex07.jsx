import React  from 'react'
import { useState, useRef } from 'react'
const Ex07 = () => {
        const [inputText, setInputText] = useState();
        const inputRef = useRef();
        const[ranNum , setRanNum] =useState(()=>parseInt(Math.random()*50)+1);
        
        const paresed = parseInt(inputText)
        const isNum = !Number.isNaN(paresed)
        
        const btnClick =()=>{
            let text = inputRef.current.value
             setInputText(text)
            
            
           
        }
  return (
    <div>
        <h1>1~50사이 랜덤수 맞추기</h1>
        <input ref={inputRef}></input>
        <button onClick={btnClick}>추측</button>                                             
        <p>출력 :  { !isNum ? '숫자를 입력하세요': parseInt(inputText)=== ranNum ? '정답입니다' : parseInt(inputText)<= ranNum ? "더큰 수":"더작은 수" }</p>
    </div>
  )
}

export default Ex07