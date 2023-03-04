import React from 'react'

function Categories({categories ,filterMenu }) {
  return (
    <div className="btn-container">
        {
            categories.map((category , index) => {
                return(
                    <button key={index} className="filter-btn" onClick={() => {
                        filterMenu(category)
                    }}>
                        {category}
                    </button>
                )
            })
        }
    </div>
  )
}

export default Categories