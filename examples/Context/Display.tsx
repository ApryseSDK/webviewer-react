import React, { useState, useEffect, useContext } from 'react'
import { DocumentViewerContext } from '../../src/components/Context'
import { TContextState } from '../../src/components/Context'

const docs = ['PDFTRON_about.pdf', '1.pdf', '2.pdf', '3.pdf']

function Display() {
  const {instances, addInstance} = useContext(DocumentViewerContext)

  const [elements, setElements] = useState([])

  function appendNewDocumentViewer() {
    console.log('insinsins - ', instances)
    const rnd = Math.floor(Math.random() * 4)
    const UID = Date.now().toString(16)
    const el = document.createElement('div')
    const options = {
      initialDoc: `files/${docs[rnd]}`,
      UID: UID,
    }
    setElements([...elements, options])
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

  function removeDocumentViewer() {}

  return (
    <>
      <div>
        <button onClick={appendNewDocumentViewer}>
          Add New Document Viewer
        </button>
      </div>
      <div>
        {elements.map(el => (
          <div id={el.UID} key={el.UID} />
        ))}
      </div>
    </>
  )
}

export default Display
