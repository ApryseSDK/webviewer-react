// @ts-ignore
import React, { useRef, useEffect } from 'react'
import useInstances from '../context'

export type TProps = {
  docUrl: string
  UID: string
}

function DocumentViewer({ docUrl, UID }: TProps): JSX.Element {
  const viewer = useRef<HTMLDivElement>(null)

  const { addInstance } = useInstances()

  useEffect(() => {
    addInstance(docUrl, UID, viewer.current)
  }, [])

  return <div className='webviewer' ref={viewer} />
}

export default DocumentViewer