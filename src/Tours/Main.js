import React , {useState , useEffect} from 'react'
import Loading from './Loading';
import './style.css'
import Tours from './Tours';


const url = 'https://course-api.com/react-tours-project';

function Main() {

  const [loading, setLoading] = useState(true);
  const [tours , setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch(error) {
      console.log(error);
      setLoading(true);
    }
  }

  const removeTour = (id) => {
     const newTours = tours.filter((tour) => {
       if(tour.id !== id) {
         return tour;
       }
     });
     setTours(newTours);
  }

  useEffect(() => {
    fetchTours();
  }, [])
  

  if(loading) {
    return (
        <main>
           <Loading></Loading>
        </main>
    )
  }

  if(tours.length === 0) {
    return(
       <div className="title">
            <h2>No Tours</h2>
            <div className="underline"></div>
            <button className='btn' onClick={fetchTours}>Refresh</button>
       </div>
    )
  }

  return (
    <main>
      <Tours tours = {tours} removeTour = {removeTour}></Tours>
    </main>
  )
  
  
}

export default Main