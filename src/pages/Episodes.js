import { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filter/Category/InputGroup";

const Episodes = () => {
  const [info, setInfo] = useState([]);
  const [id, setId] = useState(1);
  const [results, setResults] = useState([]);
  const { air_date, name } = info;

  let apiUrl = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(apiUrl).then((res) => res.json());
      setInfo(result);

      let abc = await Promise.all(
        result.characters.map(async (character) => {
          const res = await fetch(character);
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
          Episode name:{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date : {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
           

        <h4 className="text-center mb-4">
            Pick Episodes
            </h4>
            <InputGroup total={51} name="Episode" setId={setId}/>
            
            
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

export default Episodes;
