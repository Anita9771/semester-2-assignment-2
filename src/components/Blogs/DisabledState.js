import React from 'react'

const DisabledState = () => {
  return (
    <div className="blog">
      <h2>How do you use disabled in React?</h2>
      <p>
      Use the disabled prop to disable a button in React, e.g. <button disabled={true}>Click</button>. You can use the prop to conditionally disable the button based on the value of an input field or another variable or to prevent multiple clicks to the button.
      </p>
    </div>
  )
}

export default DisabledState