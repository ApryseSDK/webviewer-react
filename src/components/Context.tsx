import React, {
  useState,
  useEffect,
  useReducer,
  createContext,
  PropsWithChildren,
} from 'react'
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer'

type TProps = {
  children: JSX.Element
  elementForViewer: HTMLElement
  initialDoc: string
}

const DocumentViewerContext = createContext<object>({
  instances: [],
  setInstances: () => {},
})

function DocumentViewerProvider({
  children,
  elementForViewer,
  initialDoc,
}: PropsWithChildren<TProps>): JSX.Element {
  const [instances, setInstances] = useState<Array<WebViewerInstance>>([])

  function addInstance(initialDoc, UID, DVElement) {
    WebViewer(
      {
        path: 'webviewer/lib',
        initialDoc: initialDoc,
        enableFilePicker: true,
      },
      DVElement
    ).then(instance => {
      setInstance([...instances, instance])
    })
  }

  function removeInstance(UID) {}

  return (
    <DocumentViewerContext.Provider value={instances}>
      {children}
    </DocumentViewerContext.Provider>
  )
}
