import React, {
  useState,
  createContext
} from 'react'
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer'

export type TProviderProp = {
  children: JSX.Element
}

export type TContextState = {
  instances: object,
  addInstance: Function
}

export type TKeyInstancePair = {
  [key: string]: WebViewerInstance
}

const DocumentViewerContext = createContext<TContextState>({
  instances: {},
  addInstance: async () => { },
})

function DocumentViewerProvider({ children }: TProviderProp): JSX.Element {

  const [instances, setInstances] = useState<TKeyInstancePair>({})
  const value = { instances, addInstance }

  async function addInstance(
    initialDoc: string,
    UID: string,
    DVElement: HTMLElement
  ) {
    const el = document.createElement('div')
    const instance = await WebViewer(
      {
        path: 'webviewer/lib',
        initialDoc: initialDoc,
        disabledElements: ['header', 'toolsHeader', 'pageNavOverlay', 'textPopup']
      },
      DVElement
    )
    setInstances({ ...instances, [UID]: instance })
  }

  return (
    <DocumentViewerContext.Provider value={value}>
      {children}
    </DocumentViewerContext.Provider>
  )
}

export { DocumentViewerContext, DocumentViewerProvider }
