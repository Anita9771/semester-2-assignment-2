import React from 'react'

const Pagination = () => {
  return (
    <div className="blog">
    <h2>Introduction to client-side pagination</h2>
    <p>
    Client-side pagination makes one query to the server to fetch all data. The client-side keeps all data in the memory and displays a portion of them by page index. Client-side pagination always has the total data count.
    </p>
  </div>
  )
}

export default Pagination