import React , {useState} from 'react'
import './Style.css';
import paragraph from './data' ;

function Lorem() {

  const [coint, setCoint] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(coint);
    if(coint <=0) {
        amount = 1;
    }
    if(coint > 8) {
        amount = 8
    }
    setText(paragraph.slice(0,amount));
  } 


  return (
    <section className="section-center">
        <h3>Tired of boring lorem ipsum</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor="amount">Paragraphs</label>
          <input type="number" name="amoutn" id="amonut" value={coint}
            onChange = {(e) => {
              setCoint(e.target.value)
            }}
          />
          <button className="btn">Generate</button>
        </form>
        <article className="lorem-text">
            {
                text.map((text , index) => {
                    return(
                        <p key={index}>{text}</p>
                    )
                })
            }
        </article>
    </section>
  )
}

export default Lorem