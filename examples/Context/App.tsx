import React from 'react'
import { DocumentViewerProvider } from '../../lib'
import Body from './Body'
import '../_css/App.css'

const App = () => {
  // if using a class, equivalent of componentDidMount

  return (
    <DocumentViewerProvider libLocation={'http://127.0.0.1:8000/webviewer/lib'} >
      <div className='App'>
        <div className='header'>React sample</div>
        <Body />
      </div>
    </DocumentViewerProvider>
  )
}

export default App
