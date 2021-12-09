import React from 'react'
import useInstance from '../../lib'
import {
  getRandomLocalDocUrl,
  buildRandomRectAnnot,
  modalStyle,
  closeStyle,
  modalWrapper,
  rowStyle,
} from './utils'

export default function Modal({ toggleModal }) {
  const { instance } = useInstance()

  function zoomIn() {
    instance.UI.setZoomLevel(instance.UI.getZoomLevel() + 0.2)
  }

  function ReplaceDocument() {
    instance.UI.loadDocument(getRandomLocalDocUrl())
  }

  function addRandomAnnotation() {
    const rectAnnot = buildRandomRectAnnot(instance)
    const manager = instance.Core.annotationManager
    manager.addAnnotation(rectAnnot)
    manager.redrawAnnotation(rectAnnot)
  }

  function toggleToolsHeader() {
    const el = ['toolsHeader']
    instance.UI.enableElements(el)
  }

  return (
    <div style={modalStyle}>
      <div className='hover' style={closeStyle} onClick={toggleModal}>
        X
      </div>
      <div style={modalWrapper}>
        <div style={rowStyle}>
          <button onClick={ReplaceDocument} className='buttons'>
            Change Document
          </button>
          <button onClick={zoomIn} className='buttons'>
            Zoom In
          </button>
          <button onClick={addRandomAnnotation} className='buttons'>
            Add Annotation
          </button>
          <button onClick={toggleToolsHeader} className='buttons'>
            Enable Tools Header
          </button>
        </div>
      </div>
    </div>
  )
}
