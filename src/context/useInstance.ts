import { DocumentViewerContext } from './Context'
import { useContext } from 'react';
import { TContextState } from './Context';

export default function useInstance(): TContextState {
  return useContext(DocumentViewerContext)
}
