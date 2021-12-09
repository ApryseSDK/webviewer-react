import React, { useState, useEffect, useRef } from 'react'
import useInstance, {
  DocumentViewer,
  DocumentViewerSimpleDisplay,
} from '../../lib'
import { getInitialWvOptions } from './utils'
import Modal from './Modal'

function Display() {
  const { instance, setInstance } = useInstance()
  const [open, setOpen] = useState(false)
  const [fullUi, setSFullUi] = useState(false)
  const ref = useRef(null)

  function toggleModal() {
    setOpen(!open)
  }

  function simpleDisplay() {
    setInstance(undefined)
    setSFullUi(false)
  }

  function showFullUi() {
    setInstance(undefined)
    setSFullUi(true)
  }

  useEffect(() => {
    console.log('WebViewer single instance - ', instance)
  }, [instance])

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={simpleDisplay} className='buttons'>
          Simple Display
        </button>
        <button onClick={showFullUi} className='buttons'>
          Full UI
        </button>
        <button onClick={toggleModal} className='buttons'>
          Controls Inside Modal
        </button>
      </div>
      {open && <Modal toggleModal={toggleModal} />}
      {fullUi ? (
        <DocumentViewer ref={ref} {...getInitialWvOptions()} />
      ) : (
        <DocumentViewerSimpleDisplay ref={ref} {...getInitialWvOptions()} />
      )}
    </>
  )
}

export default Display
