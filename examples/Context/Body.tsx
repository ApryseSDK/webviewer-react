import React from 'react'
import Display from './Display'

function Body() {
  return (
    <>
      <h4>Not only it wraps the WebViewer inside a React component, you will also have control over the WebViewer instance everywhere in your app.</h4>
      <h4>Want to handle your document inside you cool modal component? No problem!</h4>
      <div>
        <Display />
      </div>
    </>
  )
}

export default Body
