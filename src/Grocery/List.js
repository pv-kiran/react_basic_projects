import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'


function List({items , removeItem , editItem}) {

  

  return (
    <React.Fragment>
        <div className="grocery-list">
            {
                items.map((item) => {
                    const {id , title} = item;
                    return(
                        <article key={id} className="grocery-item">
                            <p className="title">{title}</p>
                            <div className='btn-container'>
                               <button onClick={() => editItem(id) } className="edit-btn">
                                 <FaEdit></FaEdit>
                               </button>
                               <button onClick={() => removeItem(id)} className="delete-btn">
                                 <FaTrash></FaTrash>
                               </button>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    </React.Fragment>
  )
}

export default List