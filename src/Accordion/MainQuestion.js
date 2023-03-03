import React , {useState} from 'react'
import Question from './Question'
import './style.css';
import question from './data';

function MainQuestion() {
 
  const [questions, setQuestions] = useState(question);
 
  return (
    <main>
        <section className="info">
            { questions.map((question) => {
                const {id} = question;
                return(
                    <Question key={id} {...question}></Question>
                )
            })}
        </section>
    </main>
  )
}

export default MainQuestion