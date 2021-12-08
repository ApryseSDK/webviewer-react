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
const libLocation = 'http://127.0.0.1:8000/webviewer/lib'

function getRandomLocalDocUrl() {
  const rnd = Math.floor(Math.random() * docs.length)
  // TODO: setup env
  return `http://127.0.0.1:8000/files/${docs[rnd]}`
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function Display() {
  const { instance, setInstance } = useInstance()
  const [open, setOpen] = useState(false)
  const [key, setKey] = useState(Date.now().toString(16))
  const ref = useRef(null)
  const modalRef = useRef(null)

  function reloadWebViewer() {
    setKey(Date.now().toString(16))
  }

  function toggleModal() {
    setOpen(!open)
  }

  useEffect(() => {
    if (ref?.current) {
      WebViewer(
        {
          path: libLocation,
          initialDoc: getRandomLocalDocUrl(),
        },
        ref.current
      ).then(ins => {
        setInstance(ins)
      })
    }
  }, [ref, key])

  useEffect(() => {
    console.log('WebViewer single instance - ', instance)
  }, [instance])

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={reloadWebViewer} className='buttons'>
          Reload Component
        </button>
        <button onClick={toggleModal} className='buttons'>
          Toggle Modal
        </button>
      </div>
      {open &&　<Modal modalRef={modalRef} toggleModal={toggleModal}/>}
      <DocumentViewer ref={ref} zoom={0.4} key={key} />
    </>
  )
}

function Modal ({modalRef, toggleModal}) {
  const { instance } = useInstance()

  function zoomIn() {
    instance.UI.setZoomLevel(instance.UI.getZoomLevel() + 0.2)
  }

  function ReplaceDocument() {
    instance.UI.loadDocument(getRandomLocalDocUrl())
  }

  function addRandomAnnotation() {
    const rectangleAnnot = new instance.Core.Annotations.RectangleAnnotation()
    rectangleAnnot.PageNumber = 1
    rectangleAnnot.X = getRandomInt(500)
    rectangleAnnot.Y = getRandomInt(800)
    rectangleAnnot.Width = getRandomInt(200)
    rectangleAnnot.Height = getRandomInt(200)
    rectangleAnnot.FillColor = new instance.Core.Annotations.Color(
      getRandomInt(255),
      getRandomInt(255),
      getRandomInt(255)
    )
    rectangleAnnot.Author = 'Test User'
    rectangleAnnot.setContents('Comment on this rectangle')
    const manager = instance.Core.annotationManager
    manager.addAnnotation(rectangleAnnot)
    manager.redrawAnnotation(rectangleAnnot)
  }

  function toggleToolsHeader() {
    const el = ['toolsHeader']
    instance.UI.enableElements(el)
  }

  return (
    <div
      ref={modalRef}
      style={{
        display: 'flex',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        height: '400px',
        boxShadow: '0 0 10px;',
        backgroundColor: '#FFFFFFF0',
      }}>
        <div className='hover' style={{position: 'absolute', top:'10px', right:'10px', fontSize:'24px'}} onClick={toggleModal}>X</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent:'center'
        }}>
        <div
          style={{ flexDirection: 'row', display: 'flex', marginTop: '5px' }}>
          <button onClick={ReplaceDocument} className='buttons'>
            Change Document
          </button>
          <button onClick={zoomIn} className='buttons'>
            Zoom In
          </button>
          <button onClick={addRandomAnnotation} className='buttons'>
            Add Annotation
          </button>
          <button onClick={toggleToolsHeader} className='buttons'>Enable Tools Header</button>
        </div>
      </div>
    </div>
  )
}

export default Display
