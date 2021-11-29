import Gender from "./Category/Gender";
import Status from "./Category/Status";
import Species from "./Category/Species";

const Filter = ({setStatus, setPage, setGender, setSpecies}) => {
   
  const clearFilter = () =>{
    setStatus("")
    setPage(1)
    setGender("")
    setSpecies("")
    window.location.reload(false)
  }


  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
        onClick={clearFilter}
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status  setStatus={setStatus} setPage={setPage}/>
        <Gender setGender={setGender}  setPage={setPage} />
        <Species setSpecies={setSpecies} setPage={setPage}/>
      </div>
    </div>
  );
};

export default Filter;
