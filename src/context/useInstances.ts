import { DocumentViewerContext } from './Context'
import { useContext } from 'react';
import { TContextState } from './Context';

export default function useInstances(): TContextState{
  const { instances, addInstance } = useContext(DocumentViewerContext);
  return {instances, addInstance}
}
