import React, { useState, useEffect, useRef } from 'react'
import useInstance, {
  DocumentViewer,
  DocumentViewerSimpleDisplay,
} from '../../lib'
import { getInitialWvOptions } from './utils'
import Modal from "./Chakra/Modal";
import Drawer from "./Chakra/Drawer";

function Display() {
  const { instance, setInstance } = useInstance()
  const [open, setOpen] = useState(false)
  const [fullUi, setSFullUi] = useState(false)
  const ref = useRef(null)

  function toggleModal() {
    setOpen(!open)
  }

  function simpleDisplay() {
    if (fullUi) {
      setInstance(undefined);
      setSFullUi(false);
    }
  }

  function showFullUi() {
    if (!fullUi) {
      setInstance(undefined);
      setSFullUi(true);
    }
  }

  useEffect(() => {
    console.log('WebViewer single instance - ', instance)
  }, [instance])

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={simpleDisplay} className="buttons">
          Simple Display
        </button>
        <button onClick={showFullUi} className="buttons">
          Full UI
        </button>
      </div>
      <Modal />
      <Drawer />
      {fullUi ? (
        <DocumentViewer {...getInitialWvOptions()} />
      ) : (
        <DocumentViewerSimpleDisplay {...getInitialWvOptions()} />
      )}
    </>
  )
}

export default Display
