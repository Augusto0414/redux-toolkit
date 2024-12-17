import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { Pokemon } from "./Pokemon.tsx"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
      <Pokemon />
    </Provider>
  </StrictMode>,
)