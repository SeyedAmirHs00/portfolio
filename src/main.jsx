import React from 'react'
import ReactDOM from 'react-dom/client'
import CandyMenu from './components/candy-menu'
import Name from './components/name'
import Search from './components/search'
import './index.css'

ReactDOM.createRoot(document.getElementById('candy-menu')).render(
  <React.StrictMode>
    <CandyMenu />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById("name")).render(
  <React.StrictMode>
    <Name />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById("search")).render(
  <React.StrictMode>
    <Search />
  </React.StrictMode>
)