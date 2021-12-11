import React, { useState, useEffect } from 'react'
import useInstance, {
  DocumentViewer,
  DocumentViewerSimpleDisplay,
} from '../../src'
import { getInitialWvOptions } from './utils'
import Modal from './Chakra/Modal'
import Drawer from './Chakra/Drawer'
import PopoverAddText from './Chakra/PopoverAddText'
import Annotate from './Chakra/Annotate'

function Display() {
  const { instance, setInstance } = useInstance()
  const [fullUi, setSFullUi] = useState(false)

  function simpleDisplay() {
    if (fullUi) {
      setInstance(undefined)
      setSFullUi(false)
    }
  }

  function showFullUi() {
    if (!fullUi) {
      setInstance(undefined)
      setSFullUi(true)
    }
  }

  useEffect(() => {
    console.log('WebViewer single instance - ', instance)
  }, [instance])

  return (
    <>
      <div style={{ margin: '10px 0' }}>
        <button onClick={simpleDisplay} className='buttons'>
          Simple Display
        </button>
        <button onClick={showFullUi} className='buttons'>
          Full UI
        </button>
          <div className='current'>
            Current Component:{' '}
            {fullUi ? `<DocumentViewer />` : `<DocumentViewerSimpleDisplay />`}
          </div>
      </div>
      <hr />
      <div style={{margin:'15px 0'}}>
        <Modal />
        <Drawer />
        <PopoverAddText />
        <Annotate />
      </div>
      {fullUi ? (
        <DocumentViewer {...getInitialWvOptions()} />
      ) : (
        <DocumentViewerSimpleDisplay {...getInitialWvOptions()} />
      )}
    </>
  )
}

export default Display
