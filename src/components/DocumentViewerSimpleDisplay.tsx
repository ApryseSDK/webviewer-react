import React, { useCallback } from 'react';
import DocumentViewer from './DocumentViewer';
import { DISABLED_ELEMENTS } from '../utils/utils';
import type { TProps, TRef } from './DocumentViewer';
import type { WebViewerInstance } from '@pdftron/webviewer';
import PropTypes from 'prop-types';

const DocumentViewerSimpleDisplay = React.forwardRef<TRef, TProps>(({ onReady, ...rest }, ref) => {

  const prepareSingleFitPageDisplay = useCallback((instance: WebViewerInstance) => {
    const { documentViewer, DisplayMode, DisplayModes } = instance.Core;
    const displayMode = documentViewer.getDisplayModeManager();
    displayMode.setDisplayMode(new DisplayMode(documentViewer, DisplayModes.Single));
    instance.UI.setFitMode(instance.UI.FitMode.FitPage);
    if (onReady) onReady(instance);
  }, []);
  
  return <DocumentViewer onReady={prepareSingleFitPageDisplay} disabledElements={DISABLED_ELEMENTS} {...rest} ref={ref} />;
});

DocumentViewerSimpleDisplay.propTypes = {
  onReady: PropTypes.func
};

export default DocumentViewerSimpleDisplay;