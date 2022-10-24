import React from 'react'

const ErrorBoundaryDesc = () => {
  
  return (
    <div className="blog">
    <h2>What is error boundary in React?</h2>
    <p>
    Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
    </p>
  </div>
  )
}

export default ErrorBoundaryDesc