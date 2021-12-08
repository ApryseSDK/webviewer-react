// @ts-ignore
import React, { useEffect } from 'react'
import useInstance from '../context'
import DocumentViewer from './DocumentViewer'
import { DISABLED_ELEMENTS } from '../utils'
import type {TProps, TRef} from './DocumentViewer'

const DocumentViewerSimpleDisplay = React.forwardRef<TRef, TProps>((props, ref) => {
  const { instance } = useInstance()

  useEffect(() => {
    if (instance) {
      instance.UI.disableElements(DISABLED_ELEMENTS)
    }
  }, [instance])

  return <DocumentViewer {...props} ref={ref}/>
})

export default DocumentViewerSimpleDisplay