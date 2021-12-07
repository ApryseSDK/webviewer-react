import React, { useState, useEffect } from 'react'
import WebViewer from '@pdftron/webviewer'
import { DocumentViewerProvider } from '../../lib'
import Body from './Body'
import '../_css/App.css'

const App = () => {
  const webViewerRef = React.useRef<HTMLDivElement>(null)
  const libLocation = 'http://127.0.0.1:8000/webviewer/lib'
  const docUrl = 'http://127.0.0.1:8000/files/PDFTRON_about.pdf'
  const [instance, setInstance] = useState(null)

  useEffect(() => {
    if (webViewerRef.current) {
      WebViewer(
        {
          path: libLocation,
          initialDoc: docUrl,
          disabledElements: [
            'header',
            'toolsHeader',
            'pageNavOverlay',
            'textPopup',
            'contextMenuPopup',
          ],
        },
        webViewerRef.current
      ).then(instance=> {
        setInstance(instance)
      })
    }
  }, [webViewerRef])

  useEffect

  return (
    <DocumentViewerProvider webViewerInstance={instance} webViewerRef={webViewerRef}>
      <div className='App'>
        <div className='header'>React sample</div>
        <Body />
      </div>
    </DocumentViewerProvider>
  )
}

export default App
