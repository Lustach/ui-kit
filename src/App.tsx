import { useState, createContext } from 'react'
import './App.css'
import GlobalStyles from './assets/globalStyles'
import { Button } from './components/Button/Button'
import { DragDropFile } from './components/FileUpload/FileUlpoad'
import { TabsC } from './components/Tabs/Tabs'
import { Tab } from './components/Tabs/types'
import mockData from './components/Tabs/mockData.json'
import { Input } from './components/Input/Input'
const initialTabState = [
  {
    value: 'ru',
    description: mockData,
    active: true,
  },
  {
    value: 'eu',
    description: mockData,
    active: false,
  },
]
export const Context = createContext<Tab[]>(initialTabState)

function App() {
  const [tabs] = useState<Tab[] | []>(initialTabState)
  return (
    <>
      <GlobalStyles />
      <Context.Provider value={tabs}>
        <TabsC />
      </Context.Provider>
      <Button buttonType="outlined">Just button</Button>
      <DragDropFile accept=".cls" multiple={false}></DragDropFile>
      <Input label="label" inputType="outlined" />
    </>
  )
}

export default App
