import WebViewer from '@pdftron/webviewer';

import React, { useRef, useEffect } from 'react';

interface OptionsObject {
    path: string;
    id: number;
}

function DocumentViewer(WVOptions: OptionsObject) {
    if (typeof WVOptions !== 'object') {
        return;
    }
    const incomingOptionKeys = Object.keys(WVOptions)
    const validWVOptions: any = { haha: '1' } // TODO: update type
    const initOptions: any = {} // TODO: update type
    incomingOptionKeys.forEach(function (key: string) {
        if (validWVOptions[key]) {
            initOptions[key] = WVOptions[key]
        }
    })
    const viewer = useRef(null);

    return (
        <div className="webviewer" ref={viewer} ></div>
    );


}
