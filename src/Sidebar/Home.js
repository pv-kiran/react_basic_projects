import React , {useContext} from 'react'
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';

function Home() {

  const { openSidebar , openModal } = useContext(AppContext);
  console.log(openSidebar);
  console.log(openModal)

  return (
    <main>
        <button className='sidebar-toggle' onClick={openSidebar}>
           <FaBars></FaBars>
        </button>
        <button className='btn' onClick={openModal}>
            Show Modal
        </button>
    </main>
  )
}

export default Home