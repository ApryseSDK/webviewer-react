# WebViewer-React
Display PDFs, MS Office documents, images and even videos in your React app with ease.

WebViewer-React wraps PDFTron's [WebViewer](https://www.pdftron.com/documentation/web/) as a React component and you will have controls over the powerful webviewer instance anywhere in your app.

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


## Manipulate the document and / or the UI
The webviewer instance allows you to do so much more with your displayed document. To access the instance:
```
// in your your component
import useInstances from '@pdftron/webviewer-react'
...
const { instance } = useInstance()
```

For example if you want to create an annotation on the document, just grab the annotationManager from the WebViewer instance, create an annotation object and add it to your document:

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
Or if you want to enable / disable the default PDFTron WebViewer UI tools menu:
```
const el = ['toolsHeader']
instance.UI.enableElements(el)
// or instance.UI.disableElements(el)
```
Visit PDFTron's [WebViewer](https://www.pdftron.com/documentation/web/) page to see what else you can do with the WebViewer instance!


## Installation

### NPM packages
The WebViewer-React package `@pdftron/webviewer-react` itself is just a wrapper component for PDFTron's WebViewer. To use it properly you will need to install and setup the `@pdftron/webviewer` package as well. To install the 2 necessary packages:
```
npm i @pdftron/webviewer @pdftron/webviewer-react
```
### Serve the asset files
The asset files are located in `node_modules/@pdftron/webviewer/public` and must be moved into a location that will be served and publicly accessible. 
### Setup the context provider
At the place where you setup context providers for your app, import and place the `DocumentViewerProvider` component. Components warpped inside this provider can gain access to the powerful `webviewer instance` which will be explained in other sections.
```
import { DocumentViewerProvider } from '@pdftron/webviewer-react'
...
  return (
    <DocumentViewerProvider>
      <ComponentChildren />
    </DocumentViewerProvider>
  )
```
## Components

### DocumentViewer
This component displays the loaded document itself as well as the UI for document manipulation. It needs to be placed inside the context provider which is set in the installtaion steps.

| Prop Name | Description | Type | Required | 
| :--- | :----: | :----: | ---: | 
| onReady | Callback after the document file is loaded | `function` | No| 
| className | Defines class name for the element on which webviewer is rendered. | `string` | No| 
| ref | Sets the alternative element where webviewer will render.  | `RefObject<HTMLInputElement>` | No| 
| options | 2 | 3 | 4| 
| 1 | 2 | 3 | 4| 
### DocumentViewerSimpleDisplay
| Prop Name | Description | Type | Required | 
| :--- | :----: | :----: | ---: | 
| 1 | 2 | 3 | 4| 
### DocumentProvider
| Prop Name | Description | Type | Required | 
| :--- | :----: | :----: | ---: | 
| 1 | 2 | 3 | 4| 
## Hooks
### useContext
**Parameters**
| Prop Name | Description | Test Text |
| :--- | :----: | ---: | 
| 1 | 2 | 3 |
**Instance object**
| Prop Name | Description | Test Text |
| :--- | :----: | ---: | 
| 1 | 2 | 3 |
**Update function**
## Other