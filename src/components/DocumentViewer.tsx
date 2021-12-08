import React, { useEffect, useRef } from 'react'
import useInstance from '../context'
import WebViewer from '@pdftron/webviewer'
import type { WebViewerOptions } from '@pdftron/webviewer'

export type TProps = {
  className?: string
} & WebViewerOptions

export type TRef = React.RefObject<HTMLDivElement>

const DocumentViewer = React.forwardRef<TRef, TProps>(
  ({ className, ...rest }, ref) => {
    const localRef =
      (ref as React.RefObject<HTMLDivElement>) || useRef<HTMLDivElement>(null)

    const { instance, setInstance } = useInstance()

    useEffect(() => {
      if (!instance) {
        WebViewer(rest, localRef.current as HTMLDivElement).then(ins => {
          setInstance(ins)
        })
      }
    }, [])

    return <div className={className} ref={localRef} />
  }
)

export default DocumentViewer
