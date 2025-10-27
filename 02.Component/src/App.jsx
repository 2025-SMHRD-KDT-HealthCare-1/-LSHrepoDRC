import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu'
import  Member  from './Member'
function App() {
  const [count, setCount] = useState(0)
  let temp ="ice"
  let mudo ="무한도전"

  // 객체 비구조화 할당
  let student = {
    name : '임승환',
    age : 20,
    sub : 'web'
  }

  console.log(student)

  let  { name, age, sub} = student
  console.log(name,age,sub)

  let menuArry = ["아메리카노","카폐라떼","에이드","프라페"]

  return (
    <>
    {/* map 함수 : 배열이 가지고있는 데이터(요소) 한번씩 접근해서 컴포넌트를 통해 출력하는방법 */}
    {/* 기존 배열의 데이터를 새로운 배열로 만드는 방법 */}

    {menuArry.map((data, index)=>(
      <Menu menu={data} key={index}></Menu>
    ))}
    {/* {
      [<Menu menu="test1"></Menu>,
       <Menu menu="test1"></Menu>, 
       <Menu menu="test1"></Menu>, 
       <Menu menu="test1"></Menu>]
    } */}
      {/* <Menu temp={temp} menu={menuArry[0]} price ="4100"></Menu>
      <Menu temp={temp} menu={menuArry[1]} price ="4100"></Menu>
      <Menu menu={menuArry[2]} price ="5000"></Menu>
      <Menu menu={menuArry[3]} price ="5000"></Menu> */}
      <hr></hr>
      {/* <Member mudo={mudo} name="유재석"></Member>
      <Member mudo={mudo} name="박명수"></Member>
      <Member mudo={mudo} name="정준하"></Member>
      <Member mudo={mudo} name="정형돈"></Member> */}
    </>
  )
}

export default App
