import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div style={{color: 'white', textAlign:'center', marginTop: '5rem'}} className='page404'>
        <h2>Sorry</h2>
        <p>This page cannot be found</p>
        <Link to='/' style={{color: 'orange'}}>Back to HomePage..</Link>
    </div>
  )
}

export default Page404