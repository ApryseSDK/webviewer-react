export const docs = [
    'PDFTRON_about.pdf',
    '1.pdf',
    '2.pdf',
    '3.pdf',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
  ]
  //https://pdftron-ychen02.web.app
  
  export function getRandomLocalDocUrl() {
    const rnd = Math.floor(Math.random() * docs.length)
    // TODO: setup env
    return `http://127.0.0.1:8000/files/${docs[rnd]}`
  }
  
  export function getInitialWvOptions() {
    return {initialDoc: getRandomLocalDocUrl(), path: 'http://127.0.0.1:8000/webviewer/lib'}
  }
  
  export function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  export function buildRandomRectAnnot (instance) {
    const _annot = new instance.Core.Annotations.RectangleAnnotation()
    _annot.PageNumber = 1
    _annot.X = getRandomInt(500)
    _annot.Y = getRandomInt(800)
    _annot.Width = getRandomInt(200)
    _annot.Height = getRandomInt(200)
    _annot.FillColor = new instance.Core.Annotations.Color(
      getRandomInt(255),
      getRandomInt(255),
      getRandomInt(255)
    )
    _annot.Author = 'Test User'
    _annot.setContents('Comment on this rectangle')
    return _annot
  }