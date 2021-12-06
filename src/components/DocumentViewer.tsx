import React, { useRef, useEffect } from 'react'
import useInstances from '../context'

type Props = {
  docUrl: string
  UID: string
}

function DocumentViewer({ docUrl, UID }: Props): JSX.Element {
  const viewer = useRef<HTMLDivElement>(null)

  const { addInstance } = useInstances()

  useEffect(() => {
    addInstance(docUrl, UID, viewer.current)
  }, [])

  return <div className='webviewer' ref={viewer} />
}

export default DocumentViewer