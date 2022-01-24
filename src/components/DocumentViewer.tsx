import React, { useEffect, useRef } from 'react';
import useInstance from '../context';
import WebViewer from '@pdftron/webviewer';
import type { WebViewerOptions, WebViewerInstance } from '@pdftron/webviewer';
import PropTypes from 'prop-types';

export type TProps = {
  className?: string
  prepareSimpleUi?: (instance: WebViewerInstance) => void;
} & WebViewerOptions

export type TRef = React.RefObject<HTMLDivElement>

const DocumentViewer = React.forwardRef<TRef, TProps>(
  ({ prepareSimpleUi, className, ...rest }, ref) => {
    const localRef = useRef<HTMLDivElement>(null);
    const { instance, setInstance } = useInstance();

    useEffect(() => {
      if (!instance) 
        WebViewer(rest, localRef.current as HTMLDivElement).then(ins => {
          if (prepareSimpleUi) ins.Core.documentViewer.addEventListener('documentLoaded', () => {
            prepareSimpleUi(ins);
          }, { once: true });
          setInstance(ins);
        });
      else if (prepareSimpleUi) prepareSimpleUi(instance);
    }, []);

    return <div className={className} ref={ref ? ref as unknown as React.RefObject<HTMLDivElement> : localRef} />;
  }
);

DocumentViewer.propTypes = {
  className: PropTypes.string,
  prepareSimpleUi: PropTypes.func
};

export default DocumentViewer;
