export const docs = [
    'PDFTRON_about.pdf',
    '1.pdf',
    '2.pdf',
    '3.pdf',
    '4.pdf',
    '5.png',
    '6.png',
    '7.png',
];
//https://pdftron-ychen02.web.app

export function getRandomLocalDocUrl() {
    const rnd = Math.floor(Math.random() * docs.length);
    // TODO: setup env
    return `http://127.0.0.1:8000/files/${docs[rnd]}`;
}

export function getInitialWvOptions() {
    return { initialDoc: getRandomLocalDocUrl(), path: 'http://127.0.0.1:8000/webviewer/lib' };
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function buildRandomRectAnnot(instance) {
    const _annot = new instance.Core.Annotations.RectangleAnnotation();
    _annot.PageNumber = 1;
    _annot.X = getRandomInt(500);
    _annot.Y = getRandomInt(500);
    _annot.Width = getRandomInt(100);
    _annot.Height = getRandomInt(100);
    _annot.FillColor = new instance.Core.Annotations.Color(
        getRandomInt(255),
        getRandomInt(255),
        getRandomInt(255)
    );
    _annot.Author = 'Test User';
    _annot.setContents('Comment on this rectangle');
    return _annot;
}

export function buildRandomStickyAnnot(instance, rgb) {
    const _annot = new instance.Core.Annotations.StickyAnnotation();
    _annot.NoMove = false;
    _annot.PageNumber = 1;
    _annot.StrokeColor = new instance.Core.Annotations.Color(rgb.r, rgb.g, rgb.b);
    _annot.X = 100 + getRandomInt(200);
    _annot.Y = 100 + getRandomInt(200);
    _annot.Author = 'Mark Chan';
    _annot.Subject = 'Sticky Note';
    _annot.setContents(`Test Content...`);
    return _annot;
}

export function addText(instance, texts) {
    const { Annotations, annotationManager } = instance.Core;
    const freeText = new Annotations.FreeTextAnnotation();
    freeText.PageNumber = 1;
    freeText.X = 250;
    freeText.Y = 200;
    freeText.Width = 150;
    freeText.Height = 50;
    freeText.setPadding(new Annotations.Rect(0, 0, 0, 0));
    freeText.setContents(texts);
    freeText.FontSize = '16pt';

    annotationManager.addAnnotation(freeText, { autoFocus: false });
    annotationManager.redrawAnnotation(freeText);
}