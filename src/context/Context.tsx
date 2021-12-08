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
  children: ReactNode
}

export type TContextState = {
  instance: null | WebViewerInstance
  setInstance(arg: WebViewerInstance): void
}

const DocumentViewerContext = createContext<TContextState>({
  instance: null,
  setInstance: ()=>{}
})

function DocumentViewerProvider({
  children
}: PropsWithChildren<TProviderProp>): JSX.Element { 

  const [instanceState, setInstanceState] = useState<WebViewerInstance | null>(null)
  const value = { instance: instanceState, setInstance }

  function setInstance(instance: WebViewerInstance | null) {
    setInstanceState(instance)
  }

  const memoizedValue = useMemo(()=>{return value},[instanceState, setInstance])

  return (
    <DocumentViewerContext.Provider value={memoizedValue}>
      {children}
    </DocumentViewerContext.Provider>
  )
}

export { DocumentViewerContext, DocumentViewerProvider }
