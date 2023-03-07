import React from 'react'
import Home from './Home'
import Modal from './Modal'
import Sidebar from './Sidebar'
import './Style.css'

function Container() {
  return (
    <React.Fragment>
        <Home></Home>
        <Sidebar></Sidebar>
        <Modal></Modal>
    </React.Fragment>
  )
}

export default Container