# WebViewer-React
Display PDFs, MS Office documents, images and even videos in your React app with ease.
WebViewer-React wraps PDFTron's [WebViewer](https://www.pdftron.com/documentation/web/) as a React component and you will have controls over the powerful webviewer instance anywhere in your app.

## Demo
Online demo can be found [here](https://www.pdftron.com/webviewer/demo/) 

## To use this library in your React app:

```
npm i @pdftron/webviewer @pdftron/webviewer-react
```

Inside you app's root component (or the place where you setup context providers):

```
import { DocumentViewerProvider }
...
  return (
    <DocumentViewerProvider>
      <ComponentChildren />
    </DocumentViewerProvider>
  )
```
**IMPORTANT:** You will need to host the library files which can be found in './node_modules/@pdftron/webviewer/public' then provide the URL to the `path` option at the place where you initialize WebViewer instance. 
After that, create a ref and pass that into both WebViewer's initializer and the `<DocumentViewer/>` component:

```
// YourComponent.tsx
import WebViewer from '@pdftron/webviewer'
import { DocumentViewer } from '@pdftron/webviewer-react'
...
  const { setInstance } = useInstance()
  const ref = useRef(null)
  useEffect(() => {
      ref?.current && WebViewer(
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
```

For example if you want to create an annotation, just grab the annotationManager from the WebViewer instance, create an annotation object and add it to your document:

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
