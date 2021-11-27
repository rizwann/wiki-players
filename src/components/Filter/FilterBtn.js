import React from "react";

const FilterBtn = ({name, index, item, setPage, task}) => {
  return (
    <>

    <style jsx="true">
      {`
      .x:checked + label {
        background-color: #0b5ed7;
        color: #fff;
      }
      input[type="radio"]{
          display: none;
      }
      `}
    </style>
      <div className="form-check">
        <input
          className="x"
          type="radio"
          name={name}
          id={`${name}${index}`}
          onClick={() => {setPage(1)
             task(item)
            console.log(item)
            }}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}${index}`}>
          {item}
        </label>
      </div>
    
    </>
  );
};

export default FilterBtn;
