// @ts-ignore
import React, { useRef, useEffect } from 'react'
import useInstance from '../context'

export type TProps = {
  docUrl: string
}

function DocumentViewer({ docUrl }: TProps): JSX.Element {
  const viewer = useRef<HTMLDivElement>(null)

  const { setInstance } = useInstance()

  useEffect(() => {
    setInstance(docUrl, viewer.current)
  }, [])

  return <div className='webviewer' ref={viewer} />
}

export default DocumentViewer