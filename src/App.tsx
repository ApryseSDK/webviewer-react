import React, { useRef, useEffect } from 'react'
import DocumentViewer from './components/DocumentViewer'
import './App.css'

const App = () => {
  // if using a class, equivalent of componentDidMount

  return (
    <div className='App'>
      <div className='header'>React sample</div>
      <DocumentViewer />
    </div>
  )
}

export default App

/*function Inner() {
    const ref = useRef();
    const [instance, setInstance] = useInstance();
    useEffect(() => {
        WebViewer({
            // options
        }, ref.current).then(instance => {
            setInstance(instance)
        })
    }, [])

    return (
        <div ref={ref}></div>
    )
}*/
