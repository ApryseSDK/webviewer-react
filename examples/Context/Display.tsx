import React, { useState, useEffect, useRef } from 'react'
import useInstance from '../../lib'
import { DocumentViewerSimpleDisplay } from '../../lib'
import { getRandomLocalDocUrl, getInitialWvOptions, getRandomInt } from './utils'


function Display() {
  const { instance } = useInstance()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  function toggleModal() {
    setOpen(!open)
  }

  useEffect(() => {
    console.log('WebViewer single instance - ', instance)
  }, [instance])

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={toggleModal} className='buttons'>
          Toggle Modal
        </button>
      </div>
      {open && <Modal toggleModal={toggleModal}/>}
      <DocumentViewerSimpleDisplay ref={ref} {...getInitialWvOptions()}/>
    </>
  )
}

function Modal ({toggleModal}) {
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
      style={{
        display: 'flex',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        minWidth:'540px',
        height: '400px',
        boxShadow: '0 0 10px',
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
