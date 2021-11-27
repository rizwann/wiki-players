import Gender from "./Category/Gender";
import Status from "./Category/Status";
import Species from "./Category/Species";

const Filter = () => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status />
        <Gender />
        <Species />
      </div>
    </div>
  );
};

export default Filter;
