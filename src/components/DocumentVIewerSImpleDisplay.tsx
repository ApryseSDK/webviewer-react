// @ts-ignore
import React from 'react'
import DocumentViewer from './DocumentViewer'
import { DISABLED_ELEMENTS } from '../utils'
import type { TProps, TRef } from './DocumentViewer'

const DocumentViewerSimpleDisplay = React.forwardRef<TRef, TProps>((props, ref) => {
  return <DocumentViewer disabledElements={DISABLED_ELEMENTS} {...props} ref={ref} />
})

export default DocumentViewerSimpleDisplay