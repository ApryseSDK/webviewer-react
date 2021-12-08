import React from 'react'
import useInstance from '../context'

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

export type TProps = {
  zoom: number
  // will add more initial configs
}

const DocumentViewer = React.forwardRef<HTMLDivElement, TProps>((props, ref) => {

  const { instance } = useInstance()

  if (instance) {
    instance.UI.disableElements(disabledElements)
    instance.UI.setZoomLevel(props.zoom)
  }

  return <div className='webviewer' ref={ref} />
})

export default DocumentViewer