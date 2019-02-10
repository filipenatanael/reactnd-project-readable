import React from 'react';

const heading = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  color: '#ff9900',
  position: 'absolute',
  left: '50%',
  top: '50%'
}

const NotFound = () => {
  return (
    <h1 style={heading}>
      Not Found 404.
    </h1>
  )
}

export default NotFound
