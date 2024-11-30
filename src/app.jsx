import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './app.css'
import { Route,Routes } from 'react-router-dom'

import Main from './component/main/main'
import Airdrop from './component/airdrop/airdrop'
import Blum from './component/blum/blum'
import Major from './component/major/major'
import Tapswap from './component/tapswap/tapswap'
import Pixel from './component/Pixel/Pixel'

function App()
{
  const [count, setCount] = useState(0)

  return (

      <Routes>

        <Route path="/" element={<Main/>} />
        <Route path="/blum" element={<Blum/>} />
        <Route path="/major" element={<Major/>} />
        <Route path="/tapswap" element={<Tapswap/>} />
        <Route path="/xempire" element={<Pixel/>} />
        <Route path="/tapswap" element={<Airdrop />} />

      </Routes>

  )
}

export default App
