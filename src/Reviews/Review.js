import React , {useState} from 'react'
import { FaCaretSquareLeft, FaCaretSquareRight } from "react-icons/fa";
import reviews from './data'

function Review() {
  const [index, setIndex] = useState(0);
  const {name ,job , image , text} = reviews[index];

  const checkIndex = (number) => {
     if(number >= reviews.length) {
        return 0
     } 
     if(number < 0) {
        return reviews.length - 1;
     } 
     return number;
  }

  const preReview = () => {
    setIndex((index) => {
        const newIndex = index - 1 ;
        return checkIndex(newIndex) ;
    })
  }

  const nextReview = () => {
    setIndex((index) => {
        const newIndex = index + 1 ;
        return checkIndex(newIndex) ;
    })
  }

  const randomReview = () => {
    const index = Math.floor(Math.random() * reviews.length);
    setIndex(checkIndex(index));
  }



  return (
    <article className='review'>
       <div className="img-container">
        <img src={image} alt= {name} className='person-img' />
       </div>
       <h4 className='author'>{name}</h4>
       <p className='job'>{job}</p>
       <p className='info'>{text}</p>
       <div className="button-container">
          <button className='prev-btn' onClick={preReview}>
            <FaCaretSquareLeft></FaCaretSquareLeft>
          </button>
          <button className="next-btn" onClick={nextReview}>
            <FaCaretSquareRight></FaCaretSquareRight>
          </button>
       </div>
       <button className='random-btn' onClick={randomReview}>Surprise me</button>
    </article>
  )
}

export default Review


