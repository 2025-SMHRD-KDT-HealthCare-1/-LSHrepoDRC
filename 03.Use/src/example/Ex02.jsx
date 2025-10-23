import React ,{useState} from 'react'
import pic from '../img/img1.png'
const Ex02 = () => {
    // useState의 초기값은 다양한 데이터 자료형이 가능
    const [ likEmoji, setLikeEmoji] = useState("♡")
    const [likenum, setLikeNum] = useState(0)

    // 빈 하트 클릭 시, => 채워진 하트로 변경
    // 빈 하트 클릭 시, => 숫자 0을 1로 변경
    // 채워진 하트 클릭 시 => 빈 하트로 변경
    // 채워진 하트 클릭 시 => 숫자 1을 0으로 변경
    const handleLike = () =>{
        // 클릭했을 떄 비어있는 하트라면 (조건)
        if(likEmoji =="♡")
        {
            setLikeEmoji("♥")
            setLikeNum(1)
        }
        else
        {
           setLikeEmoji("♡")
            setLikeNum(0)
        }
    }

  return (
    <div>
        {/* scr폴더 내 접근 */}
        {/* import 이미지 변수 from '경로' */}
        <img width="300px" src={pic}></img>
        <br></br>
        {/* 외부주소값 접근 */}
        <img width="300px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjNY3dhRZekCbsqf_oSbbK1IHckS5txavrw&s'></img>
        <br></br>
        {/* public 폴더에 이미지가 있다면? 
            https://localhost:5173/img/img2.jpg
            public폴더는 서버와 통신 중 -> 이곳에 저장하는 것만으로도 고유한 주소값이 생김
        */}
        <img width="300px" src='/img/img2.jpg'></img>
        <br />
        <p>
            <span onClick={handleLike}>{likEmoji}</span>
            <span>{" "} 좋아여 {likenum}개</span>
        </p>
    </div>
  )
}

export default Ex02