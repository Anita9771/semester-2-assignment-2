import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';

const BlogHeader = () => {
  return (
    <div className='blog-header'>
      <nav>
          <Link className="nav-link" to='/blogs/accessibility'>Accessibility</Link>
          <Link className="nav-link" to='/blogs/apiloadingstates'>API Loading States</Link>
          <Link className="nav-link" to='/blogs/disabledstate'>Disabled State</Link>
          <Link className="nav-link" to='/blogs/errorboundary'>Error Boundary</Link>
          <Link className="nav-link" to='/blogs/errorpage'>Error Page</Link>
          <Link className="nav-link" to='/blogs/nestedroutes'>Nested Routes</Link>
          <Link className="nav-link" to='/blogs/pagination'>Pagination</Link>
          <Link className="nav-link" to='/blogs/reactrouter'>React Router</Link>
        </nav>
    </div>
  )
}

export default BlogHeader