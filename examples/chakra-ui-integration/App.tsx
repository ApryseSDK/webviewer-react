import React from 'react';
import { DocumentViewerProvider } from '../../www/lib';
import { ChakraProvider } from "@chakra-ui/react";
import Body from './Body';

const App = () => {

  return (
    <ChakraProvider>
      <DocumentViewerProvider>
        <div className="App">
          <Body />
        </div>
      </DocumentViewerProvider>
    </ChakraProvider>
  );
};

export default App;
