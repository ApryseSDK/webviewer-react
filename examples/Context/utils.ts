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
    return { initialDoc: getRandomLocalDocUrl(), path: 'http://127.0.0.1:8000/webviewer/lib' }
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export function buildRandomRectAnnot(instance) {
    const _annot = new instance.Core.Annotations.RectangleAnnotation()
    _annot.PageNumber = 1
    _annot.X = getRandomInt(500)
    _annot.Y = getRandomInt(500)
    _annot.Width = getRandomInt(100)
    _annot.Height = getRandomInt(100)
    _annot.FillColor = new instance.Core.Annotations.Color(
        getRandomInt(255),
        getRandomInt(255),
        getRandomInt(255)
    )
    _annot.Author = 'Test User'
    _annot.setContents('Comment on this rectangle')
    return _annot
}

export const modalStyle = {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    minWidth: '540px',
    height: '200px',
    boxShadow: '0 0 10px',
    backgroundColor: '#FFFFFFF0'
}

export const closeStyle = { position: 'absolute', top: '10px', right: '10px', fontSize: '24px' }

export const modalWrapper = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

export const rowStyle = { flexDirection: 'row', display: 'flex', marginTop: '5px', padding:'10px'}