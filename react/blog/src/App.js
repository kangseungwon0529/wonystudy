import './App.css';
import {useState} from 'react';
function App() {

  let [a,b] =  useState(['남자코트 추천','강남 우동 맛집', '파이썬독학']);
  let [likes,setLikes] = useState(0);
  function Modal() {
    return (
    <div className='modal'> 
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
    )
  }

  let copy = [...a];
  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
        <button onClick={()=> {
          
          copy[0] = '여자코트 추천';
          b(copy);
        }}> 글 수정 되는 것   </button>
      <div className="list">
        <h4> {a[0]} </h4> 
        <span onClick={()=>{setLikes(likes+1)}}>👍 {likes}</span>
        <p> 내 마음대로 작성해봄 </p>
      </div>
      <div className="list">
        <h4> {a[1]} </h4>
        <p> 내 마음대로 작성해봄 </p>
      </div>
      <div className="list">
        <h4> {a[2]} </h4>
        <p> 내 마음대로 작성해봄 </p>
      </div>
      {/* <div> { post } </div> */}
        <Modal></Modal>
    
    </div>
  );
}

export default App;
