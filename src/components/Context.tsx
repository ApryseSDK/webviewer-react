import React, {
  useState,
  createContext,
} from 'react'
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer'

export type TProviderProp = {
  children: JSX.Element
}

export type TContextState = {
  instances: Array<WebViewerInstance>
  addInstance: Function
}

const DocumentViewerContext = createContext<TContextState>({
  instances: [],
  addInstance: async () => {},
})

function DocumentViewerProvider({ children }: TProviderProp): JSX.Element {

  const [instances, setInstances] = useState<Array<WebViewerInstance>>([])
  const value = {instances, addInstance}

  async function addInstance(
    initialDoc: string,
    UID: string,
    DVElement: HTMLElement
  ) {
    const instance = await WebViewer(
      {
        path: 'webviewer/lib',
        initialDoc: initialDoc,
        enableFilePicker: true,
      },
      DVElement
    )
    // @ts-ignore:
    if (!window['temp11']) window['temp11'] = []
    // @ts-ignore:
    window['temp11'].push(instance)
    setInstances([...instances, instance])
  }

  function removeInstance(UID: string) {}

  return (
    <DocumentViewerContext.Provider value={value}>
      {children}
    </DocumentViewerContext.Provider>
  )
}

export { DocumentViewerContext, DocumentViewerProvider }
