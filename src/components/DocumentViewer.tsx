import React, { useState, useEffect, useRef } from 'react';
import useInstance from '../context';
import WebViewer from '@pdftron/webviewer';
import type { WebViewerOptions } from '@pdftron/webviewer';
import PropTypes from 'prop-types';
import ControlsBar from './ControlsBar';
import styles from '../css/styles.module.css';

export type TProps = {
  className?: string,
  isSimpleDisplay?: boolean
} & WebViewerOptions

export type TRef = React.RefObject<HTMLDivElement>

const DocumentViewer = React.forwardRef<TRef, TProps>(
  ({ className, isSimpleDisplay = false, ...rest }, ref) => {
    const localRef = useRef<HTMLDivElement>(null);
    const { instance, setInstance } = useInstance();
    const [simpleUiPrepared, setSimpleUiPrepared] = useState(false);

    function prepareSimpleUI() {
      if (!isSimpleDisplay) return;
      //@ts-ignore
      const { documentViewer, CoreControls } = instance.Core;
      const { FitMode } = instance.UI;
      const displayMode = documentViewer.getDisplayModeManager();
      displayMode.setDisplayMode(new CoreControls.DisplayMode(documentViewer, CoreControls.DisplayModes.Single));
      instance.UI.setFitMode(FitMode.FitPage);
      setSimpleUiPrepared(true);
    }
    function setSimpleUiPreparedFalse() {
      setSimpleUiPrepared(false);
    }

    useEffect(() => {
      if (!instance) 
        //@ts-ignore
        WebViewer(rest, localRef.current as HTMLDivElement).then(ins => {
          setInstance(ins);
        });
      else {
        const { documentViewer } = instance.Core;
        documentViewer.addEventListener('documentLoaded', prepareSimpleUI);
        documentViewer.addEventListener('documentUnloaded',setSimpleUiPreparedFalse);
      }
      return () => {
        if (!instance) return;
        const { documentViewer } = instance.Core;
        documentViewer.removeEventListener('documentLoaded', prepareSimpleUI);
        documentViewer.removeEventListener('documentUnloaded', setSimpleUiPreparedFalse);
      };
    }, [instance]);

    return (
      <div className={className ? `${styles.documentViewer} ${className}` : styles.documentViewer}> 
        <div ref={ref ? ref as unknown as React.RefObject<HTMLDivElement> : localRef} />
        {simpleUiPrepared && isSimpleDisplay && <ControlsBar />}
      </div>);
  }
);

DocumentViewer.propTypes = {
  className: PropTypes.string,
  isSimpleDisplay: PropTypes.bool
};

export default DocumentViewer;
