import React from 'react'
import FilterBtn from '../FilterBtn'

const Gender = ({setPage, setGender}) => {
  let genders = ['male', 'female', 'unknown', 'genderless']
    return (
        <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Gender
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
       {genders.map((item, index)=>(
          <FilterBtn key={index} item={item} name="gender" index={index} setPage={setPage} task={setGender} />
       ))}
      </div>
    </div>
  </div>
    )
}

export default Gender
