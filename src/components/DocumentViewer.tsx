// @ts-ignore
import React, { useEffect, LegacyRef } from 'react'
import useInstance from '../context'

export type TProps = {
  instance: string
}

const DocumentViewer = React.forwardRef((props: object, ref: LegacyRef<HTMLDivElement>) => {

  const { instance } = useInstance()

  console.log(props,instance)


  /**
   * instace.option = props.option
   * 
   */

  return <div className='webviewer' ref={ref} />
})

export default DocumentViewer