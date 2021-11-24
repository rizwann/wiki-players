import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Filter from './components/Filter/Filter'


function App() {
const url = 'https://rickandmortyapi.com/api'

const [fetchedData, setFetchedData] = useState([]); 
const [page, setPage] = useState(1)
const {info, results} = fetchedData

console.log(results)
let api = `${url}/character/?page=${page}`



useEffect(()=>{

const fetchData = async () => {
  const res = await fetch(api)
  const data = await res.json()
  setFetchedData(data)
}
fetchData()

},[api])



  return (
    <div className="App">
      <h1 className='text-center ubuntu my-4'>Rick and Morty <span className='text-primary'>WiKi</span> </h1>
  
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <Filter/>
          </div>
            <div className='col-8 '>
            <div className='row'>
            <Cards results={results}/>
            </div>
            </div>
  </div>
  </div>
    </div>
  );
}

export default App;
