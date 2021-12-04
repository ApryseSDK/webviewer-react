import WebViewer from '@pdftron/webviewer'

import React, { useRef, useEffect } from 'react'

interface OptionsObject {
  path: string,
  id: number
}

function DocumentViewer() {
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
        // TODO: correct the path
        path: 'webviewer/lib',
        initialDoc: 'files/PDFTRON_about.pdf',
      },
      // TODO: update type
      // @ts-ignore:
      document.getElementById('documentViewer')
    ).then(instance => {
      const { documentViewer } = instance.Core
      console.log('dviewer')
    })
  }, [])
  return <div className='webviewer' id='documentViewer' />
}

export default DocumentViewer