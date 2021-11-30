import React from 'react'

const InputGroup = ({total, name, setId}) => {
    return (

            <div className="input-group mb-3">

  <select className="form-select" id={name}
  onChange={(e) => setId(e.target.value)}>
  
    <option selected value={1}>Choose...</option>
    {[...Array(total).keys()].map(i => <option value={i+1} key={i}>{name} - {i+1}</option>)} 
  </select>
</div>
        
    )
}

export default InputGroup
