import React from 'react'
import Bg from './Components/Bg'; 
import Foreground from './Components/Foreground'
const App = () => {
  return (
    <div className=' relative w-full h-screen bg-zinc-800'>
      <Bg></Bg>
      <Foreground></Foreground>
    </div>
  )
  }

export default App;
