import WebViewer from '@pdftron/webviewer'

import { useRef, useEffect } from 'react'

interface OptionsObject {
  path: string,
  id: number
}

function DocumentViewer({docUrl = ''}) {
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