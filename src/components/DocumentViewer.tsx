import WebViewer from '@pdftron/webviewer'
import React, { useRef, useEffect } from 'react'

type Props = {
  docUrl: string
}

function DocumentViewer({docUrl = ''}: Props): JSX.Element {
  const viewer = useRef<HTMLDivElement>(null)

  /*if (typeof WVOptions !== 'object') {
    return
  }*/
  const incomingOptionKeys = Object.keys({})
  const validWVOptions: any = { haha: '1' } // TODO: update type
  const initOptions: any = {} // TODO: update type
  incomingOptionKeys.forEach(function (key: string) {
    if (validWVOptions[key]) {
      //initOptions[key] = WVOptions[key]
    }
  })

  useEffect(() => {
    WebViewer(
      {
        path: 'webviewer/lib',
        initialDoc: docUrl,
        enableFilePicker: true
      },
      // TODO: update type
      // @ts-ignore:
      viewer.current
    ).then(instance => {
      const { documentViewer } = instance.Core
      console.log('dviewer')
    })
  }, [])
  return <div className='webviewer' ref={viewer}/>
}

export default DocumentViewer