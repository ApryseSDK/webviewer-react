# WebViewer-React 

A React component for displaying document in your React app. It is developed with PDFTron's [WebViewer](https://www.pdftron.com/documentation/web/) library & React context APIs.

## Live Demo

Firebase App

## Run the demo locally


To run the demo with `<DocumentViewer />` component:
```
git clone https://github.com/PDFTron/webviewer-react.git
npm i && npm run installpeer
npm run start
```

The above commands will install all dependencies, build the component and store the compiled module inside `www/lib/` folder, from where the example app will make imports for components / context hooks. After running the command you will be able to see the app running on `http://127.0.0.1:8000`. 

## To use this library in your own React project
(package to be published to registry)

```
npm i @pdftron/webviewer @pdftron/webviewer-react
```
Inside you app's root component (where you setup all other providers):
```
import { DocumentViewerProvider }
...
  return (
    <DocumentViewerProvider>
      <ComponentChildren />
    </DocumentViewerProvider>
  )
```
**IMPORTANT:** You will need to copy the library assets from './node_modules/@pdftron/webviewer/public' and place them at a location where you are able to serve them. Then provide the URL of these assets to the `path` option at the place where you initialize WebViewer instance. After that, simply create a ref and pass that into both WebViewer's initializer and the ```<DocumentViewer/>``` component.

For example:

```
// YourComponent.tsx
import WebViewer from '@pdftron/webviewer'
import { DocumentViewer } from '@pdftron/webviewer-react'
...
  const { setInstance } = useInstance()
  const ref = useRef(null)
  useEffect(() => {
      WebViewer(
        {
          path: 'http://127.0.0.1:8000/webviewer/lib',
          initialDoc: getRandomLocalDocUrl()
        },
        ref.current
      ).then(instance => {
        setInstance(instance)
      })
  }, [ref])

  return (
    <div id='someComponent'>
      <p>Display the document below</p>
      <DocumentViewer ref={ref}/>
    </div>
  )
```
You will now be able to access the WebViewer instance at other places of your React app! 

```
OtherComonent.tsx
import useInstances from '@pdftron/webviewer-react'
...
const { instance } = useInstance()
// change the zoom level of your document
instance.zoom
```





## Installation for local development of this library

```
git clone https://github.com/PDFTron/webviewer-react.git
cd webviewer-react
npm i && npm run installpeer
npm run preparevwlib
```

## Build

Run `npm run build` to build the project. The compiled module will be stored in the `lib` directory. 


