# WebViewer-React
Display PDFs, MS Office documents, images and even videos in your React app with ease.

WebViewer-React wraps PDFTron's [WebViewer](https://www.pdftron.com/documentation/web/) as a React component and you will have access to the powerful webviewer instance anywhere in your app.

## Demo
Online demo can be found [here](https://www.pdftron.com/webviewer/demo/) 

## Quick start guide:

```
npm i @pdftron/webviewer @pdftron/webviewer-react
```

Inside you app's root component (or the place where you setup context providers):

```
import { DocumentViewerProvider } from '@pdftron/webviewer-react'
...
  return (
    <DocumentViewerProvider>
      <ComponentChildren />
    </DocumentViewerProvider>
  )
```
**IMPORTANT:** You will need to host the library files which can be found in './node_modules/@pdftron/webviewer/public' then provide the URL to the `path` option at the place where you initialize WebViewer instance. 
After that, place the `<DocumentViewer />` or the `<DocumentViewerSimpleDisplay />` component in your app where you want to display your document. 
```
import { DocumentViewerSimpleDisplay } from '@pdftron/webviewer-react'
...
  return (
    <>
      <h1>Hello document!</h1>
      <DocumentViewerSimpleDisplay document=''/>
    </>
  )
```
That's it! You should see your document being presented on your page. 

## Contributing
If you are interested in helping contribute to this project, please take a look at our CONTRIBUTING guide.