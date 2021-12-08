import React, { useEffect } from 'react'
import { DocumentViewerProvider } from '../../lib'
import Body from './Body'
import '../_css/App.css'

const App = () => {

  useEffect

  return (
    <DocumentViewerProvider>
      <div className='App'>
        <Body />
      </div>
    </DocumentViewerProvider>
  )
}

export default App
