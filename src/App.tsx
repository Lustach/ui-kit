import { useState, createContext } from 'react'
import './App.css'
import { Button } from './components/Button/Button'
import { DragDropFile } from './components/FileUpload/FileUlpoad'
import { TabsC } from './components/Tabs/Tabs'
import { Tab } from './components/Tabs/types'
const initialTabState = [{
  value: 'ru',
  description: 'description 1',
  active: true,
}, {
  value: 'eu',
  description: 'description 2',
  active: false,
}]
export const Context = createContext<Tab[]>(initialTabState);

function App() {
  const [tabs] = useState<Tab[] | []>(initialTabState)
  return (
    <>
      <Context.Provider value={tabs}>
        <TabsC />
      </Context.Provider>
      <Button buttonType="outlined">Just button</Button>
      <DragDropFile></DragDropFile>
    </>
  )
}

export default App
