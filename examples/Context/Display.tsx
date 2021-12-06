import React, { useState, useEffect } from 'react'
import useInstance from '../../src/hooks/useInstances'

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

function Display() {
    
  const { instances, addInstance } = useInstance()

  const [elements, setElements] = useState([])

  function appendNewDocumentViewer() {
    const rnd = Math.floor(Math.random() * docs.length)
    const UID = Date.now().toString(16)
    const options = {
      initialDoc: `files/${docs[rnd]}`,
      UID: UID,
    }
    setElements([...elements, options])
  }

  function LoadRandomDocument(key) {
    const rnd = Math.floor(Math.random() * docs.length)
    instances[key].UI.loadDocument(`http://127.0.0.1:8000/files/${docs[rnd]}`)
  }

  useEffect(() => {
    if (elements.length > 0) {
      ;(async () => {
        const options = elements[elements.length - 1]
        const el = document.getElementById(options.UID)
        await addInstance(options.initialDoc, options.UID, el)
      })()
    }
  }, [elements])

  useEffect(() => {
    console.log('List of instances - ', instances)
  }, [instances])

  return (
    <>
      <div>
        <button onClick={appendNewDocumentViewer}>
          Add New Document Viewer
        </button>
      </div>
      <div>
        {elements.map(el => (
          <div
            key={el.UID}
            style={{
              display: 'flex',
              alignItems: 'center',
              borderTop: '2px solid',
            }}>
            <button onClick={() => LoadRandomDocument(el.UID)}>
              Load Random Document With This Instance
            </button>
            <div id={el.UID} style={{ height: '300px', width: '100%' }} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Display
