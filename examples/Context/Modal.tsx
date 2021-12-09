import useInstance from '../../lib'
import { getRandomLocalDocUrl, buildRandomRectAnnot } from './utils'

export default function Modal ({toggleModal}) {
    const { instance } = useInstance()
  
    function zoomIn() {
      instance.UI.setZoomLevel(instance.UI.getZoomLevel() + 0.2)
    }
  
    function ReplaceDocument() {
      instance.UI.loadDocument(getRandomLocalDocUrl())
    }
  
    function addRandomAnnotation() {
      const rectAnnot = buildRandomRectAnnot(instance)
      const manager = instance.Core.annotationManager
      manager.addAnnotation(rectAnnot)
      manager.redrawAnnotation(rectAnnot)
    }
  
    function toggleToolsHeader() {
      const el = ['toolsHeader']
      instance.UI.enableElements(el)
    }
  
    return (
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'auto',
          minWidth:'540px',
          height: '400px',
          boxShadow: '0 0 10px',
          backgroundColor: '#FFFFFFF0',
        }}>
          <div className='hover' style={{position: 'absolute', top:'10px', right:'10px', fontSize:'24px'}} onClick={toggleModal}>X</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'center'
          }}>
          <div
            style={{ flexDirection: 'row', display: 'flex', marginTop: '5px' }}>
            <button onClick={ReplaceDocument} className='buttons'>
              Change Document
            </button>
            <button onClick={zoomIn} className='buttons'>
              Zoom In
            </button>
            <button onClick={addRandomAnnotation} className='buttons'>
              Add Annotation
            </button>
            <button onClick={toggleToolsHeader} className='buttons'>Enable Tools Header</button>
          </div>
        </div>
      </div>
    )
  }