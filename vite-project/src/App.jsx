import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import Accordion from './practice/Accordion'
function App() {

  return (
    <div style={{fontSize: '2rem', padding: 30}}>
        <Accordion
            title = "제목"
            content = "내용"
        />
    </div>
  )
}

export default App
