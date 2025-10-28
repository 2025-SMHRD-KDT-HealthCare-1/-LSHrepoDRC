import React, { use } from 'react'
import { useEffect } from 'react'
// UseEffect : 맨처음(Mount), 화면변경(Update) 떄 실행하는 기능
import { useState } from 'react'

const FunctionComponent = () => {
    // 1. 생성자를 대체 (state, 변수, 함수 선언)
    //   : 화면을 구성하기 위한 준비물들을 선언
    console.log("1. Constructor 대체");
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);
    // 3. 화면 Mount 대체
    // useEffect(콜백함수, 반배열)
    //  2번쨰 인자값으로  받는 의존성배열을 비워두면, componentDidMount 역할을 대체
    // API call 무거운 데이터 읽기
    useEffect(() => {
        console.log("3. 화면 Mount 완료");

        const timer = setInterval(() => {
            console.log("타이머 실행중...");
            setNum((prevNum) => prevNum + 1);
        }, 1000);

        // 5. 화면 Unmount 대체
        //  useEffect(콜백함수, 빈배열) => 콜백함수의 return문에 함수의 형태로 실행
        //  componentWillUnmount 역할을 대체
        //  cleanup 함수의 역활를 수행
        return () => {
            clearInterval(timer);
            console.log("5. 화면 Unmount 대체");
        }

    }, []); // 빈 배열 : 최초 1회 Mount 될 때만 실행

    // 4. 값 update 대체
    //  useEffect(콜백함수, [변화를 감지할 변수]);
    // - 첫 랜더링떄에도 실행된다는 특징이 존재(componentDidMount와의 차이점)
    // - 변화를 감지하는 대상은 복수가 될 수 있다. (의존성 배열에 추가)
     useEffect(() => {
        console.log("4. 값 update 완료");
        
        if(num >= 10) {
            alert("목표숫자 도달!");
        }
    }, [num]);

    const handIncreament = () => {
        setNum(num + 1);
        

    }

    const handDecreament = () => {
        setNum(num - 1);

       
    }

  return (
    // 2. render 함수를 대체
    <div>
        {console.log("2. render 대체")}
        <h1>Counter {num}</h1>
        <button onClick={handIncreament}>+1</button>
        <button onClick={handDecreament}>-1</button>
    </div>
  )
}

export default FunctionComponent