import React from 'react'
import { DocumentViewerProvider } from '../../src/components/'
import Display from './Display'
import '../_css/App.css'

const App = () => {
  // if using a class, equivalent of componentDidMount

  return (
    <DocumentViewerProvider>
      <div className='App'>
        <div className='header'>React sample</div>
        <Display />
      </div>
    </DocumentViewerProvider>
  )
}

export default App
