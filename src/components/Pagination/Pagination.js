import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, setPage, page }) => {
  
  return (
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
      forcePage={page===1?0:page-1}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
