import React from 'react';
import DocumentViewer from './DocumentViewer';
import { DISABLED_ELEMENTS } from '../utils/utils';
import type { TProps, TRef } from './DocumentViewer';
import type { WebViewerInstance } from '@pdftron/webviewer';

const DocumentViewerSimpleDisplay = React.forwardRef<TRef, TProps>((props, ref) => {
  return <DocumentViewer isSingleFitPageDisplay disabledElements={DISABLED_ELEMENTS} {...props} ref={ref} />;
});

export function prepareSingleFitPageDisplay (instance: WebViewerInstance) {
  const { documentViewer, DisplayMode, DisplayModes } = instance.Core;
  const displayMode = documentViewer.getDisplayModeManager();
  displayMode.setDisplayMode(new DisplayMode(documentViewer, DisplayModes.Single));
  instance.UI.setFitMode(instance.UI.FitMode.FitPage);
}

export default DocumentViewerSimpleDisplay;