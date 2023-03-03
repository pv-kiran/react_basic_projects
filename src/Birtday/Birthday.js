import React , {useState} from 'react'
import './style.css'
import peopleList from './data'
import List from './List';

function Birthday() {

  const [people, setPeople] = useState(peopleList);

  return (
     <main>
        <section className="container">
          <h3>{people.length} birthdays Today</h3>
          <List people={people}></List>
          <button onClick={() => {
            setPeople([])
          }}>Clear All</button>
        </section>
     </main>
  )
}

export default Birthday