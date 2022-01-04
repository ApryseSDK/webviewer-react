import React from 'react'
import { DocumentViewerProvider } from '../../lib'
import Body from './Body'
import '../_css/App.css'

const App = () => {

  return (
    <DocumentViewerProvider>
      <div className='App'>
        <Body />
      </div>
    </DocumentViewerProvider>
  )
}

export default App
