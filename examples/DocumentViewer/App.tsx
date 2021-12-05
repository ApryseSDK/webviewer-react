import React from 'react'
import { DocumentViewer } from '../../src/components/'
import './App.css'

const App = () => {
  // if using a class, equivalent of componentDidMount
  const docUrl = 'files/PDFTRON_about.pdf'

  return (
    <>
      <div className='App'>
        <div className='header'>React sample</div>
        <DocumentViewer docUrl={docUrl} />
      </div>
    </>
  )
}

export default App
