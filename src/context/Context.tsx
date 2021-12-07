// @ts-ignore
import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
} from 'react'
import type { WebViewerInstance } from '@pdftron/webviewer'

export type TProviderProp = {
  webViewerInstance: WebViewerInstance
  children: ReactNode
}

export type TContextState = {
  instance: undefined | WebViewerInstance
}

const DocumentViewerContext = createContext<TContextState>({
  instance: undefined,
})

function DocumentViewerProvider({
  children,
  webViewerInstance,
}: PropsWithChildren<TProviderProp>): JSX.Element {

  const value = { instance: webViewerInstance }

  return (
    <DocumentViewerContext.Provider value={value}>
      {children}
    </DocumentViewerContext.Provider>
  )
}

export { DocumentViewerContext, DocumentViewerProvider }
