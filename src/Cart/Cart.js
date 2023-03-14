import React from 'react'
import { AppProvider, useGlobalContext } from './context'
import CartContainer from './CartContainer'
import Navbar from './Navbar'
import './style.css'


function Cart() {
  const {loading} = useGlobalContext();
  if(loading) {
    return (
        <div className="loading">
            <h1>Loading ...!!</h1>
        </div>
    )
  }

  return (
    <React.Fragment>
            <Navbar></Navbar>
            <CartContainer></CartContainer>
    </React.Fragment>
  )
}

export default Cart