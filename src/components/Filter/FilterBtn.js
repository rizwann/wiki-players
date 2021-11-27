import React from "react";

const FilterBtn = ({name, index, item}) => {
  return (
    <>

    <style jsx>
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
        />
        <label class="btn btn-outline-primary" for={`${name}${index}`}>
          {item}
        </label>
      </div>
    
    </>
  );
};

export default FilterBtn;
