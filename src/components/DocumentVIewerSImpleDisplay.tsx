import DocumentViewer from './DocumentViewer'
import type { WebViewerOptions } from '@pdftron/webviewer'
import useInstance from '../context'
import { useEffect } from 'react'

export type TProps = {
  className?: string
} & WebViewerOptions

const disabledElements = [
  'header',
  'toolsHeader',
  'viewControlsButton',
  'leftPanelButton',
  'pageNavOverlay',
  'searchButton',
  'menuButton',
  'textPopup',
  'contextMenuPopup',
]

function DocumentViewerSimpleDisplay(props: TProps) {
  const { instance } = useInstance()

  useEffect(() => {
    if (instance) {
      instance.UI.disableElements(disabledElements)
    }
  }, [instance])

  return <DocumentViewer {...props} />
}

export default DocumentViewerSimpleDisplay
