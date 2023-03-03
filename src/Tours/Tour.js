import React , {useState} from 'react'

function Tour({id, image , info , name , price , removeTour}) {

  const [readMore, setReadMore] = useState(true)

  return (
     <article className='single-tour'>
        <img src={image} alt= {name} />
        <footer>
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">
                    ${price}
                </h4>
            </div>
            <p>
              {
                readMore ? `${info.substring(0,170)}` : info
              }
              <button onClick={() => {
                setReadMore(!readMore)
              }}>
                {
                    readMore ? 'Read more' : 'Show Less'
                }
              </button>
            </p>
            <button className="delete-btn" onClick={() => {removeTour(id)}}>Not Interested</button>
        </footer>
     </article>
  )
}

export default Tour