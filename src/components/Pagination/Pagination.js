import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, setPage, page }) => {

  const [width, setWidth] = React.useState(window.innerWidth);
  console.log(width);
  
const updateDimension = () => {
  setWidth(window.innerWidth);
}

  React.useEffect(()=>{
  window.addEventListener("resize", updateDimension);
  return ()=> window.addEventListener("resize", updateDimension);

  },[])
  return (
    <>
    <style jsx>
      {`
      @media(max-width: 768px){
        .next, .prev{
          display:none;
        }
        .pagination{
          font-size:12px;
        }
      }
      `}
    </style>
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      previousLabel="Prev"
      previousClassName="btn-primary btn fs-5 prev "
      nextClassName="btn btn-primary fs-5 next"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      onPageChange={(data) => setPage(data.selected + 1)}
      activeClassName="active"
      marginPagesDisplayed={width < 576? 1 : 2}
      pageRangeDisplayed={width < 576? 1 : 2}
      forcePage={page===1?0:page-1}
      pageCount={info?.pages}
      previousLinkClassName="text-white text-decoration-none"
      nextLinkClassName="text-white text-decoration-none"
      
    />
    </>
  );
};

export default Pagination;
