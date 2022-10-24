import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { BlogHeader } from "../../components/Header";
import "../../components/Blogs/style.css";
import ErrorBoundary from "../../components/ErrorBoundary";

const Blogs = () => {

  // const [isBlogs, setIsBlogs] = useState(false);

  const location = useLocation();
console.log(location.pathname);

  return (
    <div className="blogs">
      <BlogHeader />

    
      <div className="blog-body">
         {
          location.pathname === '/blogs' ? 
        
        <h4>
            Lets take a look at what Google has to say about some concepts we
            were instructed to use in this project!
            <br />
            <b>👆</b>
          </h4> :
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
          }
      </div>
    </div>
  );
};

export default Blogs;
