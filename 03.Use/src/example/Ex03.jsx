import React, { useState } from 'react'

const Ex03 = () => {
  const [myNum, setMyNum] =useState();
  const[comnum , setComNum] =useState();
  const [result, setResult] = useState("");
  const btnClick = (btnNum) =>
  {
        setMyNum(btnNum);

        let rannum = parseInt(Math.random()*3)+1
        setComNum(rannum)

        // if(btnNum==rannum)
        // {
        //     setResult("정답입니다")
        // }
        // else
        // {
        //     setResult("떙")
        // }

  }
  

  return (
    <div>
        <button onClick={()=>btnClick(1)}>1</button>
        <button onClick={()=>btnClick(2)}>2</button>
        <button onClick={()=>btnClick(3)}>3</button>

        <div>
            <p>내가 입력한 숫자 : {myNum} </p>
            <p>컴퓨터 랜덤 숫자 :  {comnum}</p>
            <p>결과 : {myNum == comnum ? "정답": ""}</p>
        </div>
    </div>
  )
}

export default Ex03
