
## Installation

### NPM packages
The WebViewer-React package `@pdftron/webviewer-react` itself is just a wrapper component around PDFTron's WebViewer. To use it properly you will need to install and setup the `@pdftron/webviewer` package as well. To install the 2 necessary packages:
```
npm i @pdftron/webviewer @pdftron/webviewer-react
```
### Serve the asset files
The asset files are located in `node_modules/@pdftron/webviewer/public` and must be moved into a location that will be served and publicly accessible. 
### Setup the context provider
At the place where you setup context providers for your app, import and place the `DocumentViewerProvider` component. Components warpped inside this provider can gain access to the powerful webviewer `instance` which will be explained in other sections.
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

### `DocumentViewer`
This component displays the loaded document as well as the UI for document manipulation. It needs to be placed inside the context provider which is configured in the installtaion steps.

| Prop Name | Description | Type | Required | 
| :--- | :----: | :----: | ---: | 
| path | 	Path to the WebViewer asset files directory | `string` | Yes| 
| initialDoc | URL path to a document to load when the component is rendered | `string` | No| 
| disabledElements | List of data-elements to be disabled in UI | `Array<string>` | No| 
| onReady | Callback after the document file is loaded. The callback has one argument which is the webviewer instance. | `function` | No| 
| className | Defines class name for the element on which webviewer is rendered. | `string` | No| 
| ref | Sets the ref for accessing the element on which webviewer is rendered.  | `RefObject<HTMLDivElement>` | No| 
### `DocumentViewerSimpleDisplay`
This component is mostly identical to `DocumentViewer` except for it disables most of the UI elements by default.
| Prop Name | Description | Type | Required | 
| :--- | :----: | :----: | ---: | 
| path | 	Path to the WebViewer asset files directory | `string` | Yes| 
| initialDoc | URL path to a document to load when the component is rendered | `string` | No| 
| disabledElements | List of data-elements to be disabled in UI | `Array<string>` | No| 
| onReady | Callback after the document file is loaded. The callback has one argument which is the webviewer instance.  | `function` | No| 
| className | Defines class name for the element on which webviewer is rendered. | `string` | No| 
| ref | Sets the ref for accessing the element on which webviewer is rendered.  | `RefObject<HTMLDivElement>` | No| 
### `DocumentViewerProvider`
The context provider for webviewer instance.
| Prop Name | Description | Type | Required | 
| :--- | :----: | :----: | ---: | 
| children | React nodes which can have access to the webviewer instance through the context hook useInstance(). | `ReactNode` | Yes| 
| instance | An optional webviewer instance which will replace the default instance created by `DocumentViewer` or `DocumentViewerSimpleDisplay` components. | `WebViewerInstance` | No| 

## Hooks
### `useInstance`
You can set or get the webviewer instance with this hook. This is a powerful feature if you need programmatical manipulations over the loaded document at different places of your app. 

**Usage**

```const { instance, setInstance } = useInstance();```

**Instance**

The webviewer instance allows you to manipulate the document and / or the UI programmatically. If you want to create an annotation on the document, just get the annotationManager from the WebViewer instance, create an annotation object and add it to your document:

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
Check [here](https://www.pdftron.com/documentation/web/guides/overview/) to see what you can do with PDFTron's WebViewer and webviewer instance.

**setInstance**

Used for optionally setting a self-created webviewer instance to replace the default instance created by `DocumentViewer` or `DocumentViewerSimpleDisplay` components. Setting this value does not re-render the component.
