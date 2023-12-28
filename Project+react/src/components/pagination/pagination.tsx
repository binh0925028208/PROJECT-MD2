import React, { useState, useEffect } from "react";
import { request } from "graphql-request";

import ReactPaginate from "react-paginate";

const PageItem = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  // ...

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = ({ selected }:any) => {
    setCurrentPage(selected + 1);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Blog</h1>
      </div>
      {blogPosts ? (
        <div className="blog-content-section">
          {/* ... */}
          <ReactPaginate
            onPageChange={paginate}
            pageCount={Math.ceil(blogPosts.length / postsPerPage)}
            previousLabel={"Prev"}
            nextLabel={"Next"}
            containerClassName={"pagination"}
            pageLinkClassName={"page-number"}
            previousLinkClassName={"page-number"}
            nextLinkClassName={"page-number"}
            activeLinkClassName={"active"}
          />
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default PageItem;
