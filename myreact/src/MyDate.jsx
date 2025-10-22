import React from 'react'

 const MyDate = () => {

    //현재 시간 가져오기
    let day = new Date();
    console.log(day)
    let name = prompt("이름을 입력하세요")
    let myYear = day.getFullYear();
    let myMonth = day.getMonth()+1;
    let myDay = day.getDate();
    let isLogin = true;
    let season= ''
    if(isLogin&&name)
    {
       isLogin=false;
        console.log(myYear, myMonth, myDay)
    
        if(myMonth<=3 && myMonth<=5)
        {
            season='봄';
        }
        else if(myMonth<=6 && myMonth<=8)
        {
            season='여름';
        }
        else if ( myMonth<=9 && myMonth<=11){
            season='가을'
        }
        else
        {
            season='겨울'
        }
        return (
            
            <div>
                <h1>{myYear}년{myMonth}월{myDay}일</h1>
                <hr></hr>
                <p>{name}님 지금은 {season}계절 입니다 좋은하루 보내세요!</p>
                
            </div>
        )
        
    }
    
}

export default MyDate
