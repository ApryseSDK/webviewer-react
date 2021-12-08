// @ts-ignore
import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useMemo,
  useState,
} from 'react'
import type { WebViewerInstance } from '@pdftron/webviewer'

export type TProviderProp = {
  children: ReactNode,
  instance?: WebViewerInstance
}

export type TContextState = {
  instance: WebViewerInstance | undefined
  setInstance(arg: WebViewerInstance): void
}

const DocumentViewerContext = createContext<TContextState>({
  instance: undefined,
  setInstance: ()=>{}
})

function DocumentViewerProvider({
  children, instance
}: PropsWithChildren<TProviderProp>): JSX.Element { 

  const [instanceState, setInstance] = useState<WebViewerInstance | undefined>(instance)

  const value = useMemo(()=>({ instance: instanceState, setInstance }),[instanceState, setInstance])

  return (
    <DocumentViewerContext.Provider value={value}>
      {children}
    </DocumentViewerContext.Provider>
  )
}

export { DocumentViewerContext, DocumentViewerProvider }
