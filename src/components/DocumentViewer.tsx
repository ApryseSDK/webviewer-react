import React, { useEffect, useRef } from 'react';
import useInstance from '../context';
import WebViewer from '@pdftron/webviewer';
import type { WebViewerOptions } from '@pdftron/webviewer';
import { prepareSingleFitPageDisplay } from './DocumentViewerSimpleDisplay';
import PropTypes from 'prop-types';

export type TProps = {
  className?: string
  isSingleFitPageDisplay?: boolean
} & WebViewerOptions

export type TRef = React.RefObject<HTMLDivElement>

const DocumentViewer = React.forwardRef<TRef, TProps>(
  ({ isSingleFitPageDisplay, className, ...rest }, ref) => {
    const localRef = useRef<HTMLDivElement>(null);
    const { instance, setInstance } = useInstance();

    useEffect(() => {
      if (!instance) 
        WebViewer(rest, localRef.current as HTMLDivElement).then(ins => {
          if (isSingleFitPageDisplay) ins.Core.documentViewer.addEventListener('documentLoaded', () => {
            prepareSingleFitPageDisplay(ins);
          }, { once: true });
          setInstance(ins);
        });
      else if (isSingleFitPageDisplay) prepareSingleFitPageDisplay(instance);
    }, []);

    return <div className={className} ref={ref ? ref as unknown as React.RefObject<HTMLDivElement> : localRef} />;
  }
);

DocumentViewer.propTypes = {
  className: PropTypes.string,
  isSingleFitPageDisplay: PropTypes.bool
};

export default DocumentViewer;
