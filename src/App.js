import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";

import Cards from "./components/Cards/Cards";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";

import CardDetails from "./components/Cards/CardDetails";
import Footer from "./components/Footer";

function App(){
  return(
    <Router>
      <div className="App">
      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location/:id" element={<CardDetails />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}

const Home = () => {
  const url = "https://rickandmortyapi.com/api";

  const [fetchedData, setFetchedData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  const { info, results } = fetchedData;

  // console.log(results)
  let api = `${url}/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(api);
      const data = await res.json();
      setFetchedData(data);
    };
    fetchData();
  }, [api]);

  return (
    <div className="App">
     
<h1 className="text-center mb-4">Characters</h1>
 <Search setSearch={setSearch} setPage={setPage} ph="Search by the character name"/>
      <div className="container">
        <div className="row">
          <Filter
            setStatus={setStatus}
            setPage={setPage}
            setGender={setGender}
            setSpecies={setSpecies}
          />

          <div className="col-lg-8 col-12 ">
            <div className="row">
              <Cards results={results} page="/"/>
            </div>
          </div>
        </div>
      </div>
      <Pagination setPage={setPage} page={page} info={info} />
    </div>
  );
}

export default App;
