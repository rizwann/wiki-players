import { useEffect, useState } from "react";
import { useParams } from "react-router";


const CardDetails = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState({});

  const { name, status, species, gender, type, origin, image, location } = player;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      setPlayer(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="container d-flex justify-content-center ">
      <div className="d-flex flex-column">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt={name} className="img-fluid mb-4" />

        <div
          className={`badge ${
            status === "Alive"
              ? "bg-success"
              : status === "Dead"
              ? "bg-danger"
              : "bg-warning"
          } fs-5 `}
        >
          {status}
        </div>
        <div className="content mt-4">
            <div className="">
                <span className="fw-bold">Gender: </span> {gender}
            </div>

            <div className="">
                <span className="fw-bold">Species: </span> {species}
            </div>
            <div className="">
                <span className="fw-bold">Location: </span> {location?.name}
            </div>
            <div className="">
                <span className="fw-bold">Type: </span> {type === "" ? "Unknown" : type}
            </div>
            <div className="">
                <span className="fw-bold">Origin: </span> {origin?.name}
            </div>

        </div>
      </div>
    </div>
  );
};

export default CardDetails;
