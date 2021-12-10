import React from 'react'
import { DocumentViewerProvider } from '../../lib'
import { ChakraProvider } from "@chakra-ui/react";
import Body from './Body'
import '../_css/App.css'

const App = () => {

  return (
    <ChakraProvider>
      <DocumentViewerProvider>
        <div className='App'>
          <Body />
        </div>
      </DocumentViewerProvider>
    </ChakraProvider>
  )
}

export default App
