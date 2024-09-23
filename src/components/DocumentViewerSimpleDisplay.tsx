import React, { useCallback } from 'react';
import DocumentViewer from './DocumentViewer';
import { DISABLED_ELEMENTS } from '../utils/utils';
import type { TProps, TRef } from './DocumentViewer';
import type { WebViewerInstance } from '@pdftron/webviewer';
import PropTypes from 'prop-types';

const DocumentViewerSimpleDisplay = React.forwardRef<TRef, TProps>(({ onReady, ...rest }, ref) => {

  rest.path = '/lib';
  rest.initialDoc = 'demo-annotated.pdf';
  rest.licenseKey = 'License Key Here';
  
  const prepareSingleFitPageDisplay = useCallback((instance: WebViewerInstance) => {
    instance.Core.documentViewer.addEventListener('documentLoaded', () => {
      // https://docs.apryse.com/api/web/Core.html#.DisplayModes
      //const { documentViewer, DisplayMode, DisplayModes } = instance.Core;
      //const displayMode = documentViewer.getDisplayModeManager();
      //displayMode.setDisplayMode(new DisplayMode(documentViewer, DisplayModes.Single));
      instance.UI.setFitMode(instance.UI.FitMode.FitPage);
    }, { once: true });
    if (onReady) {
      onReady(instance);
    }
  }, [onReady]);
    
  return <DocumentViewer onReady={prepareSingleFitPageDisplay} disabledElements={DISABLED_ELEMENTS} {...rest} ref={ref} />;
});

DocumentViewerSimpleDisplay.propTypes = {
  onReady: PropTypes.func
};

DocumentViewerSimpleDisplay.displayName = 'DocumentViewerSimpleDisplay';

export default DocumentViewerSimpleDisplay;