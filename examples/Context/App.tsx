import React from 'react'
import { DocumentViewerProvider } from '../../src/context'
import Body from './Body'
import '../_css/App.css'

const App = () => {
  // if using a class, equivalent of componentDidMount

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
