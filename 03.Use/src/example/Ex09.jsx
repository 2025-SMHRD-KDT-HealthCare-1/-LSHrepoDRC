import React from 'react'
import { useState, useRef } from 'react'

const Ex09 = () => {
    // 1. input태그에 적은 내용이 계획추가 버튼 클릭시, 배열애 저장(state)
    // 2. 저장된 배열state를 map함수를 통해서 ul태그 안에 li태그로 출력
    // 3. li에 달려있는 삭제버튼 클릭했을때, filter 함수를 사용해서
    //    해당 요소만을 지우고, 새롭게 배열을 만들어서 저장(state)
    const [todo, setTodo] = useState([]);
    const [value, setinputRef] = useState("");

    const addTodo = () => {
        
        setTodo([...todo, value]);
        setinputRef("");
    }

    const deleteTodo = (index) => {
       const newTodo = todo.filter((item) => item !== index);
        setTodo(newTodo);
    }

  return (
    <div>
        <h1>2025 올해는 꼭 할 수 있다</h1>  
        <input  type="text" value={value} onChange={(event)=> setinputRef(event.target.value)} />
        <button onClick={addTodo}>계획추가</button>

        <h1>TodoList</h1>
          
            <ul> 
                {todo.map((item,index) => (
                    <li  key={index}>{item} <button onClick={() => deleteTodo(item)}>삭제</button></li>   
                ))}            
            </ul>
            
        
      
    </div>
  )
}

export default Ex09