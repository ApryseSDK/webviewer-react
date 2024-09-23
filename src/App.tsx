import React from 'react';
import './App.css';
import DocumentViewerProvider from './components/DocumentViewer';
import DocumentViewerSimpleDisplay from './components/DocumentViewerSimpleDisplay';

function App() {
  return (
    <div className="App">
      <div className="topHalf">
        <h2> DocumentViewerProvider Component</h2>
        <DocumentViewerProvider className="documentViewerProvider" path={''}/>
      </div>
      <div className="bottomHalf">
        <h2> DocumentViewerSimpleDisplay Component</h2>
        <DocumentViewerSimpleDisplay className="documentViewerSimpleDisplay" path={''}/>
      </div>
    </div>
  );
}

export default App;
