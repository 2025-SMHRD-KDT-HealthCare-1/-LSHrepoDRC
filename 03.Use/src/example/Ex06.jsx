import React from 'react'
import Ex06map from '../components/Ex06map'
import data from '../json/ex06data.json'

const Ex06 = () => {
  return (
    <div>
       <h1>Map 실습</h1>

      <div style={{ display: 'flex', gap: '20px' }}>
        {data.result.map((item, index) => (
          <Ex06map key={index} item={item} />
        ))}
      </div>
      <h1>Filter 실습</h1>
      {/* 
        94년생 이전 출생 연예인만 필터링헤서 출력  
        .birthYear를 통해서 출생년도에 접근가능!
      */}
         <div style={{display : 'flex'}}>
        {data.result
          .filter((item)=> item.birthYear < 1994)
          .map(item => (
            <Ex06map key={item.title} item={item} />
          ))}
      </div>
    </div>
  )
}

export default Ex06