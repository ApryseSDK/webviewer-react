# WebViewer-React

A React component for displaying document in your React app. It is developed with PDFTron's [WebViewer](https://www.pdftron.com/documentation/web/) library & React context APIs. Not only it wraps the WebViewer inside a React component, you will also have control over the WebViewer instance everywhere in your app.
Want to handle the document inside you cool modal component? No problem.

## Live Demo
[Demo](https://pdftron-ychen02.web.app/) 
## Run the demo locally

To run the demo with `<DocumentViewer />` component:

```
git clone https://github.com/PDFTron/webviewer-react.git
npm i && npm run installpeer
npm run start
```

The above commands will install all dependencies, build the component and store the compiled module inside `www/lib/` folder, from where the example app will make imports for components / context hooks. After running the command you will be able to see the app live at `http://127.0.0.1:8000`.

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
You can optionally supply a WebViewer instance into the DocumentViewerProvider if this is what you need.
```
<DocumentViewerProvider instance={yourWebViewerInstance}> 
```
**IMPORTANT:** You will need to copy the library assets from './node_modules/@pdftron/webviewer/public' and place them at a location where you are able to serve them. Then provide the URL of these assets to the `path` option at the place where you use `DocumentViewer` or `DocumentViewerSimpleDisplay` components.
For example:
```
// YourComponent.tsx
import WebViewer from '@pdftron/webviewer'
import { DocumentViewer } from '@pdftron/webviewer-react'
...
  const options = {path: 'https://url-to/your/lib-location', /*optional*/ initialDoc: 'https://url-to/your/document' }
  return (
    <div id='someComponent'>
      <p>Display the document below</p>
      <DocumentViewer {...options}/>
    </div>
  )
```
You can optionally pass a `ref` into `DocumentViewer` if you wish to have access to the DOM element on which WebViewer was instantiated.
You will now be able to access the WebViewer instance at other places of your React app!
```
OtherComonent.tsx
import useInstances from '@pdftron/webviewer-react'
...
const { instance } = useInstance()
```
If you want to create an annotation, just grab the annotationManager from the WebViewer instance, create an annotation object and add it to your document:
```
const manager = instance.Core.annotationManager
const rectangleAnnot = new instance.Core.Annotations.RectangleAnnotation()
rectangleAnnot.PageNumber = 1
rectangleAnnot.X = 200
rectangleAnnot.Y = 180
rectangleAnnot.Width = 220
rectangleAnnot.Height = 170
rectangleAnnot.FillColor = new instance.Core.Annotations.Color(
  255,
  255,
  0
)
rectangleAnnot.Author = 'Test User'
rectangleAnnot.setContents('Comment on this rectangle')

manager.addAnnotation(rectangleAnnot)
```
Or if you want to enable the default PDFTron WebViewer Tools Menu:
```
const el = ['toolsHeader']
instance.UI.enableElements(el)
```
Visit PDFTron's [WebViewer](https://www.pdftron.com/documentation/web/) page to see what else you can do with the WebViewer instance!
## Installation for local development of this library

```
git clone https://github.com/PDFTron/webviewer-react.git
cd webviewer-react
npm i && npm run installpeer
npm run preparevwlib
```

## Build

Run `npm run build` to build the project. The compiled module will be stored in the `lib` directory.
