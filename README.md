# WebViewer-React 

A React component for displaying documents in your React app. It is developed with PDFTron's [WebViewer](https://www.pdftron.com/documentation/web/) library & React context APIs.

## Live Demo

Codesandbox link to be updated 

## To use this library in your own project
(package to be published to registry)

```
npm i @pdftron/webviewer-react
```
Then inside you app's root component (where you setup all other providers):
```
import { DocumentViewerProvider }

...


  return (
    <DocumentViewerProvider>
      <ComponentChildren />
    </DocumentViewerProvider>
  )
```

Then inside your React components, you will be able to use the context hook to access existing / add new document instances

```
import useInstances from '@pdftron/webviewer-react'

...

const { instances, addInstance } = useInstances()

...

// Note that addInstance is asynchronous
await addInstance(initialDoc, UID, HTMLElement)
```

Or simply import the <DocumentViewer /> component and place it at the places you want

```
import { DocumentViewer } from '@pdftron/webviewer-react'

...

  return (
      <ParentComponent>
        <DocumentViewer docUrl={docUrl1} UID={UID1}/>
        <DocumentViewer docUrl={docUrl2} UID={UID2}/>
      </ParentComponent>
  )
```




## Installation for local development of this library

```
git clone https://github.com/PDFTron/webviewer-react.git
cd webviewer-react
npm install
npm run preparevwlib
```

## Run the demo

To run the demo with context hooks
```
npm run startctx
```

To run the demo with `<DocumentViewer />` component:
```
npm run startdv
```

The above commands will automatically build the component and store the compiled module inside `lib/` folder, from where the example app will make imports for components / context hooks. After running the command you will be able to see the app running on `http://127.0.0.1:8000`. 

## Build

Run `npm run build` to build the project. The compiled module will be stored in the `lib` directory. 


