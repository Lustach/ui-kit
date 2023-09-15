import * as React from 'react'
import 'react-json-view-lite/dist/index.css'
import './.json-view__container.css'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite'

export type JsonViewProps = {
  json: { [key: string]: string } | undefined
}

export const JsonViewComponent: React.FC<JsonViewProps> = (json) => {
  return (
    <>
      <JsonView data={json} shouldInitiallyExpand={allExpanded} style={{ ...defaultStyles, container: 'json-view__container' }} />
    </>
  )
}
