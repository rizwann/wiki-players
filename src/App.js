import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import { useEffect, useState } from "react";


import Cards from "./components/Cards/Cards";
import Filter from './components/Filter/Filter'
import Pagination from './components/Pagination/Pagination'
import Search from './components/Search/Search'


function App() {
const url = 'https://rickandmortyapi.com/api'

const [fetchedData, setFetchedData] = useState([]); 
const [page, setPage] = useState(1)
const [search, setSearch] = useState('')

const {info, results} = fetchedData

// console.log(results)
let api = `${url}/character/?page=${page}&name=${search}`



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
  <Search setSearch={setSearch} setPage={setPage}/>
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
  <Pagination setPage={setPage} page={page} info={info}/>
    </div>
  );
}

export default App;
