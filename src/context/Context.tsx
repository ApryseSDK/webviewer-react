// @ts-ignore
import React, {
  useState,
  createContext,
  PropsWithChildren,
  ReactNode,
} from 'react'
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer'

export type TProviderProp = {
  libLocation: string
  children: ReactNode
}

export type TContextState = {
  instance: undefined | WebViewerInstance
  setInstance(arg0: string, arg1: HTMLElement): Promise<void>
}

const DocumentViewerContext = createContext<TContextState>({
  instance: undefined,
  setInstance: async () => {},
})

function DocumentViewerProvider({
  children,
  libLocation,
}: PropsWithChildren<TProviderProp>): JSX.Element {
  const [instance, setInstanceState] = useState<WebViewerInstance | undefined>()
  const value = { instance, setInstance }

  async function setInstance(initialDoc: string, htmlElement: HTMLElement) {
    const instance = await WebViewer(
      {
        path: libLocation,
        initialDoc: initialDoc,
        disabledElements: [
          'header',
          'toolsHeader',
          'pageNavOverlay',
          'textPopup',
          'contextMenuPopup',
        ],
      },
      htmlElement
    )
    setInstanceState(instance)
  }

  return (
    <DocumentViewerContext.Provider value={value}>
      {children}
    </DocumentViewerContext.Provider>
  )
}

export { DocumentViewerContext, DocumentViewerProvider }
