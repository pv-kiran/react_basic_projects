import React from 'react'
import Review from './Review'
import './style.css'

function MainReview() {
  return (
    <main>
        <section>
            <div className="title">
                <h2>Our Reviews</h2>
                <div className="underline"></div>
            </div>
            <Review></Review>
        </section>
    </main>
  )
}

export default MainReview