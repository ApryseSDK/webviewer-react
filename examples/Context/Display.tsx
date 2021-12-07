import React, { useState, useEffect, useRef, useReducer } from 'react'
import useInstance from '../../lib'

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
  const { instance, setInstance } = useInstance()
  const [option, setOption] = useState(null)
  const ref = useRef(null)

  function createdNewDocumentViewer() {
    const rnd = Math.floor(Math.random() * docs.length)
    const opt = {
      // TODO: setup env for this
      initialDoc: `http://127.0.0.1:8000/files/${docs[rnd]}`,
      htmlElement: ref
    }
    setOption(opt)
  }

  function LoadRandomDocument() {
    const rnd = Math.floor(Math.random() * docs.length)
    // TODO: setup env for this
    instance.UI.loadDocument(`http://127.0.0.1:8000/files/${docs[rnd]}`)
  }

  useEffect(() => {
    if (option && ref?.current) {
      ;(async () => {
        await setInstance()
      })()
    }
  }, [option])

  useEffect(() => {
    console.log('WebViewer single instance - ', instance)
  }, [instance])

  return (
    <>
      <div>
        <button onClick={createdNewDocumentViewer}>
          Load New WebViewer Instance
        </button>
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderTop: '2px solid',
          }}>
          <button onClick={LoadRandomDocument}>
            Replace The Document With This Instance
          </button>
          <div style={{ height: '300px', width: '100%' }} ref={ref}/>
        </div>
      </div>
    </>
  )
}

export default Display
