import React, { useState } from 'react';
import useInstance, {
  DocumentViewer,
  DocumentViewerSimpleDisplay,
} from '../../www/lib';
import { getInitialWvOptions } from './utils';
import Modal from './components/Modal';
import Drawer from './components/Drawer';
import PopoverAddText from './components/PopoverAddText';
import Annotate from './components/Annotate';

function Display() {
  const { setInstance } = useInstance();
  const [fullUi, setSFullUi] = useState(false);

  function simpleDisplay() {
    if (fullUi) {
      setInstance(undefined);
      setSFullUi(false);
    }
  }

  function showFullUi() {
    if (!fullUi) {
      setInstance(undefined);
      setSFullUi(true);
    }
  }

  return (
    <>
      <div style={{ margin: '10px 0' }}>
        <button onClick={simpleDisplay} className="buttons">
          Simple Display
        </button>
        <button onClick={showFullUi} className="buttons">
          Full UI
        </button>
        <div className="current">
            Current Component:{' '}
          {fullUi ? `<DocumentViewer />` : `<DocumentViewerSimpleDisplay />`}
        </div>
      </div>
      <hr />
      <div style={{ margin:'15px 0' }}>
        <Modal />
        <Drawer />
        <PopoverAddText />
        <Annotate />
      </div>
      {fullUi ? (
        <DocumentViewer {...getInitialWvOptions()} />
      ) : (
        <DocumentViewerSimpleDisplay {...getInitialWvOptions()} />
      )}
    </>
  );
}

export default Display;
