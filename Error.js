import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <div>
        <h1>404 ....Error Page</h1>
        <Link to='/'>Go to Home Page </Link>
    </div>
  )
}

export default Error;