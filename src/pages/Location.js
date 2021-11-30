import { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filter/Category/InputGroup";

const Location = () => {
  const [info, setInfo] = useState([]);
  const [id, setId] = useState(1);
  const [results, setResults] = useState([]);
  const { type, name, dimension } = info;

  let apiUrl = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(apiUrl).then((res) => res.json());
      setInfo(result);

      let abc = await Promise.all(
        result.residents.map(async (resident) => {
          const res = await fetch(resident);
            return await res.json();
        })
      );

      setResults(abc);
    };
    fetchData();
  }, [apiUrl]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Location :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
        Dimension : {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">
          Type : {type === "" ? "Unknown" : type}
         
        </h6>
      </div>
      <div className="row">
        <div className="col-3">
            <h4 className="text-center mb-4">
            Pick Location
            </h4>
            <InputGroup total={126} name="Location" setId={setId}/>
        </div>

        <div className="col-8">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
