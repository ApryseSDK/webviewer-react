import React, { useEffect } from 'react'
import { DocumentViewerProvider } from '../../lib'
import Body from './Body'
import '../_css/App.css'

const App = () => {

  useEffect

  return (
    <DocumentViewerProvider>
      <div className='App'>
        <div className='header'>React sample</div>
        <Body />
      </div>
    </DocumentViewerProvider>
  )
}

export default App
