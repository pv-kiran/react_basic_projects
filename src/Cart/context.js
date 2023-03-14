import React, { useState, useContext, useReducer, useEffect } from 'react'
import items from './data'

// import reducer from './reducer'


const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const reducer = (state , action) => {
    if(action.type === 'CLEAR_CART') {
      return {...state , cart:[]}
    }
    if(action.type === 'REMOVE_ITEM') {
       return {...state ,cart: state.cart.filter((item) => item.id !== action.payload) }
    }
    if(action.type === 'INCREMENT_ITEM') {
       const updatedCart = state.cart.map((cartItem) => {
          if(cartItem.id === action.payload) {
            return {...cartItem , amount: cartItem.amount +1}
          }
          return cartItem
       })
       return {...state ,cart: updatedCart}
    }
    if(action.type === 'DECREMENT_ITEM') {
       const updatedCart = state.cart.map((cartItem) => {
          if(cartItem.id === action.payload) {
            return {...cartItem , amount: cartItem.amount - 1}
          }
          return cartItem
       }).filter((item) => item.amount !== 0)
       return {...state ,cart: updatedCart}
    }
    if(action.type === 'GET_TOTAL') {
      let amount = state.cart.reduce((sum ,item) => {
          return sum + item.amount;
      } , 0)
      let total = state.cart.reduce((totalAmount ,item) => {
          return totalAmount = totalAmount + (item.amount * item.price); 
      } , 0)
      total = parseFloat(total).toFixed(2);
      return {...state , amount , total }
    }

    if(action.type === 'LOADING') {
      return {...state , loading:false}
    }
    if(action.type === 'DISPLAY_ITEMS') {
      return { ...state , cart: action.payload , loading: false}
    }

    return state
}




const initialState = {
  loading: false ,
  cart: items ,
  total: 0 ,
  amount: 0
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer,initialState)

  const fetchData = async () => {
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type: 'DISPLAY_ITEMS' , payload: cart})
  }

  const clearCart =  () => {
    dispatch({type: 'CLEAR_CART'})
  }

  const removeItem = (id) => {
    dispatch({type: 'REMOVE_ITEM' , payload: id})
  }

  const incrementItem = (id) => {
     dispatch({type: 'INCREMENT_ITEM' , payload: id})
  }

  const decrementItem = (id) => {
     dispatch({type: 'DECREMENT_ITEM' , payload: id})
  }

  useEffect(() => {
    dispatch({type: 'GET_TOTAL'})
  }, [state.cart])

  // useEffect(() => {
  //   dispatch({type: 'LOADING'})
  //   fetchData();
  // })
  
  return (
    <AppContext.Provider value={{...state , clearCart , removeItem , incrementItem , decrementItem}}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
