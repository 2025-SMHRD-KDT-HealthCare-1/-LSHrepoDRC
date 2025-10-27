import React from 'react'
import { useState } from 'react'
const Ex08 = () => {
    const [mySrc, setSrc] = useState('./src/img/Pairi.png')
    const [pos, setPos] = useState(0)
    let index = ['./src/img/Pairi.png','./src/img/Rizard.png','./src/img/Rizamong.png']

    const next = ()=>{
        
        if(pos==2){
            setPos(0)
        }
        else
        {
            setPos(pos+1)
        }
        // if(mySrc==index[0]){
        //   setSrc(index[1])
        // }
        // else if(mySrc)
        // {
        //     setSrc(index[2])
        // }
        // if(mySrc==index[2])
        // {
        //     setSrc(index[0])
        // }
        
    }

    const before = () =>{

         if(pos==0){
            setPos(2)
        }
        else
        {
            setPos(pos-1)
        }
        // if(mySrc==index[2]){
        //   setSrc(index[1])
        // }
        // else if(mySrc)
        // {
        //     setSrc(index[0])
        // }
        // if(mySrc==index[0])
        // {
        //      setSrc(index[2])
        // }
    }

  return (
    <div>
        <img src={index[pos]}></img>
        <br />
        <button onClick={before}>이전</button>
        <button onClick={next}>다음</button>
    </div>
  )
}

export default Ex08