import React  from 'react'
import { useState, useRef } from 'react'
import { useEffect } from 'react';
const Ex07 = () => {
        const [inputText, setInputText] = useState();
        const inputRef = useRef();
        const[ranNum , setRanNum] =useState(()=>parseInt(Math.random()*50)+1);
        
        const paresed = parseInt(inputText)
        const isNum = !Number.isNaN(paresed)
        const [resultText, setResultText] = useState('');
        const [chance, setChance] = useState (10);
        const btnClick =()=>{
            let text = inputRef.current.value
             setInputText(text)
             
            if(text > ranNum){
                setChance (chance -1);
                setResultText ('더 작은수 입력');
            }
            else if(text < ranNum){
                setChance (chance -1);
                setResultText ('더 큰수 입력');
            }
            else if(text == ranNum){
                setResultText ('정답입니다!! 축하합니다!!');
                return;
            }
           
 
        }
         useEffect(() => {
                
                if(chance === 0){
                    alert(`기회를 모두 사용하였습니다. 정답은 ${ranNum}입니다.`);
                    resetGame();
        
                }
            });

          const resetGame = () => {
                setRanNum (parseInt (Math. random () * 50) + 1);
                setChance (10);
                setResultText ('');
                setInputText ('');
          }
        
  return (
    <div>
        <h1>1~50사이 랜덤수 맞추기</h1>
         <p>기회: {chance}</p>
        <input ref={inputRef}></input>
        <button onClick={btnClick}>추측</button>
        <button onClick={resetGame}>다시하기</button>                                             
        <p>출력 :  {resultText}</p>
    </div>
  )
}

export default Ex07