import React, { useState, useEffect, useRef } from 'react'
import useInstance from '../../lib'
import WebViewer from '@pdftron/webviewer'
import { DocumentViewer } from '../../lib'

const docs = [
  'PDFTRON_about.pdf',
  '1.pdf',
  '2.pdf',
  '3.pdf',
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
]

function getRandomLocalDocUrl() {
  const rnd = Math.floor(Math.random() * docs.length)
  // TODO: setup env
  return `http://127.0.0.1:8000/files/${docs[rnd]}`
}

function Display() {
  const { instance, setInstance } = useInstance()
  const [key, setKey] = useState(Date.now().toString(16))
  const ref = useRef(null)
  const libLocation = 'http://127.0.0.1:8000/webviewer/lib'

  function reloadDocument() {
    instance?.UI.loadDocument(getRandomLocalDocUrl())
  }

  function reloadWebViewer() {
    setKey(Date.now().toString(16))
  }

  useEffect(() => {
    if (ref?.current) {
      WebViewer(
        {
          path: libLocation,
          initialDoc: getRandomLocalDocUrl(),
          disabledElements: [
            'header',
            'toolsHeader',
            'pageNavOverlay',
            'textPopup',
            'contextMenuPopup',
          ],
        },
        ref.current
      ).then(instance => {
        setInstance(instance)
      })
    }
  }, [ref, key])

  useEffect(() => {
    console.log('WebViewer single instance - ', instance)
  }, [instance])

  return (
    <>
      <div>
        <button onClick={reloadWebViewer}>Reload the DocumentViewer Component and WebViewer Instance</button>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderTop: '2px solid',
        }}>
        <button onClick={reloadDocument}>
          Replace The Document With The Current Instance
        </button>
        <DocumentViewer ref={ref} key={key} />
      </div>
    </>
  )
}

export default Display
