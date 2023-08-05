import React, { useEffect } from 'react'
import {Footer, Header} from './components'
import RoutesMain from './routes/RoutesMain'
import logoImage from "./assets/logo.svg"

function App() {
  const title = "Cinemate"
  const logo = logoImage
  useEffect(() => {
    document.title = title
  },[])
     return (
    <div className='App'>
        <Header title={title} logo={logo} />
        <main className='dark:bg-slate-800'>
          <RoutesMain />
        </main>
        <Footer title={title} logo={logo} />
    </div>
  )
}

export default App