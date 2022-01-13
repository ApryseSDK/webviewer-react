import React, { useEffect, useRef } from 'react';
import useInstance from '../context';
import WebViewer from '@pdftron/webviewer';
import type { WebViewerOptions, WebViewerInstance } from '@pdftron/webviewer';
import PropTypes from 'prop-types';

export type TProps = {
  className?: string
  isSimpleDisplay?: boolean
} & WebViewerOptions

export type TRef = React.RefObject<HTMLDivElement>

const DocumentViewer = React.forwardRef<TRef, TProps>(
  ({ isSimpleDisplay, className, ...rest }, ref) => {
    const localRef = useRef<HTMLDivElement>(null);
    const { instance, setInstance } = useInstance();

    function prepareSimpleUi (instance: WebViewerInstance) {
      const { documentViewer, DisplayMode, DisplayModes } = instance.Core;
      const displayMode = documentViewer.getDisplayModeManager();
      displayMode.setDisplayMode(new DisplayMode(documentViewer, DisplayModes.Single));
      instance.UI.setFitMode(instance.UI.FitMode.FitPage);
    }

    useEffect(() => {
      if (!instance) 
        WebViewer(rest, localRef.current as HTMLDivElement).then(ins => {
          if (isSimpleDisplay) ins.Core.documentViewer.addEventListener('documentLoaded', () => prepareSimpleUi(ins));
          setInstance(ins);
        });
      else if (isSimpleDisplay) prepareSimpleUi(instance);
    }, []);

    return <div className={className} ref={ref ? ref as unknown as React.RefObject<HTMLDivElement> : localRef} />;
  }
);

DocumentViewer.propTypes = {
  className: PropTypes.string,
  isSimpleDisplay: PropTypes.bool
};

export default DocumentViewer;
