// @ts-ignore
import React, {
  useState,
  createContext,
  PropsWithChildren,
  ReactNode
} from 'react'
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer'

export type TProviderProp = {
  libLocation: string,
  children: ReactNode
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

function DocumentViewerProvider({ children, libLocation }: PropsWithChildren<TProviderProp>): JSX.Element {

  const [instances, setInstances] = useState<TKeyInstancePair>({})
  const value = { instances, addInstance }

  async function addInstance(
    initialDoc: string,
    UID: string,
    DVElement: HTMLElement
  ) {
    const instance = await WebViewer(
      {
        path: libLocation,
        initialDoc: initialDoc,
        disabledElements: ['header', 'toolsHeader', 'pageNavOverlay', 'textPopup', 'contextMenuPopup']
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
