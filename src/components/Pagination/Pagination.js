import React from 'react'

const Pagination = ({setPage, page}) => {

    const next = () => {
        setPage(page => page + 1)
    }

    const previous = () => {
        if(page===1) return
  setPage(page => page - 1)
    }

    return (
        <div className='container d-flex justify-content-center gap-5 mb-3'>
            <button className='btn btn-primary' onClick={previous} >Prev</button>
            <button className='btn btn-primary'  onClick={next}>Next</button>
        </div>
    )
}

export default Pagination
