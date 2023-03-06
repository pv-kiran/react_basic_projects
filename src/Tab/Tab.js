import React , {useState , useEffect} from 'react'
import { AiOutlineDoubleRight } from "react-icons/ai";
import './style.css'

const url = 'https://course-api.com/react-tabs-project'

function Tab() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setjobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
     try {   
        const response = await fetch('https://course-api.com/react-tabs-project');
        const newJobs = await response.json();
        setjobs(newJobs);
        setIsLoading(false);
     } catch(e) {
        console.log(e);
     }
  }

  useEffect(() => {
      fetchJobs();
  } , [])

  if(isLoading) {
    return(
        <section className="section loading">
            <h1>Loading ...!!</h1>
        </section>
    )
  }

  const {company , dates , duties , title} = jobs[value]

  return (
    <section className="section">
        <div className="title">
            <h2>Experience</h2>
            <div className="underline"></div>
        </div>
        <div className="jobs-center">
            {/* Btn Container */}

            <div className="btn-container">
                {
                    jobs.map((job , index) => {
                        return(
                            <button 
                            key={index}
                            onClick={() => {
                                setValue(index)
                            }}
                            className= {`job-btn ${index === value && 'active-btn'}`}
                            >{job.company}</button>
                        )
                    })
                }
            </div>

            {/* Job Info */}
               <article className="job-info">
                 <h3>{title}</h3>
                 <h4>{company}</h4>
                 <p className='job-date'>{dates}</p>
                 {
                    duties.map((duty) => {
                        return(
                            <div className="job-desc">
                               <AiOutlineDoubleRight className='job-icon'></AiOutlineDoubleRight>
                               <p>{duty}</p>
                            </div>
                        )
                    })
                 }
               </article>

        </div>
    </section>
  )


}

export default Tab