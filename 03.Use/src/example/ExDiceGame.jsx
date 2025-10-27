import React from 'react'
import { useState, useRef} from 'react'
const ExDiceGame = () => {
    //1. 버튼 클릭시 주사위 이미지 랜덤하게 변경(둘다)
    //2. 주사위에 숫자를 비교> 더 큰 Score 값을 +1 증가
    //3. Score 값이 먼저 10에 도달한 결과를 출력
    //   >> "User 승리" or "Com 승리"
    //4. 게임이 종료된 후에는 더이상 주사위가 굴러가지 않도록 처리
    const [comScore, setComScore] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [diceCom, setDiceCom] = useState(1);
    const [diceUser, setDiceUser] = useState(1);
   
    const startGame = () => {
       
      if (comScore == 10 || userScore == 10)
      {
          return;
      }
        let comNum = parseInt(Math.random() * 6) + 1;
          setDiceCom(comNum);
        let userNum = parseInt(Math.random() * 6) + 1;
          setDiceUser(userNum);
        
        if (comNum > userNum) {
            setComScore(comScore + 1);
        } else if (userNum > comNum) {
            setUserScore(userScore + 1);
        }
         
    }

    const resetGame = () => {
        setComScore(0);
        setUserScore(0);
        
        setDiceCom(1);
        setDiceUser(1);

    }

  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={startGame}>Start</button>
      <button onClick={resetGame}>Reset</button>

      <div>
        <img src={'./src/img/Dice'+ diceCom +'.png'}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div>
        <img src={'./src/img/Dice'+diceUser+'.png'}></img>
        <h1>User Score :{userScore}</h1>
      </div>

      <h1>결과 : { userScore>=10 ? "User 승리" : comScore>=10  ? "Com 승리" : "게임 진행중..."}</h1>
    </div>

  )
}

export default ExDiceGame