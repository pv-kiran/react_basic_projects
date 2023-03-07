import React , {useContext} from 'react'
import {links , social} from './data';
import { FaTimes } from 'react-icons/fa';
import logo from './logo.svg'
import { AppContext } from './context';

function Sidebar() {

  const {isSidebarOpen , closeSidebar} = useContext(AppContext);

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar': 'sidebar'}`}>
          <div className="sidebar-header">
             <img src={logo} alt="Codding adict" />
             <button className='close-btn' onClick={closeSidebar}>
                <FaTimes></FaTimes>
             </button>
          </div>
          <ul className='links'>
            {
                links.map((item) => {
                    const {id , url , text , icon} = item ;
                    return(
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    )
                })
            }
          </ul>
          <ul className='social-icons'>
            {
                social.map((item) => {
                    const {id , url , icon} = item ;
                    return(
                        <li key={id}>
                            <a href={url}>
                                {icon}
                            </a>
                        </li>
                    )
                })
            }
          </ul>
    </aside>
  )



}

export default Sidebar