import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Button/Button'
import { DragDropFile } from './components/FileUpload/FileUlpoad'
import { TabsC } from './components/Tabs/Tabs'
import { Tab } from './components/Tabs/types'
const initialTabState = [{
  value: 'ru',
  description: 'description',
  active: true,
}, {
  value: 'eu',
  description: 'description',
  active: false,
}]
export const Context = createContext<Tab[]>(initialTabState);

function App() {
  const [count, setCount] = useState(0)
  const [tabs, setTabs] = useState<Tab[] | []>(initialTabState)
  return (
    <>
      <Context.Provider value={tabs}>
        <TabsC />
      </Context.Provider>
      <Button buttonType="outlined">Just button</Button>
      <DragDropFile></DragDropFile>
      <p>Test</p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
